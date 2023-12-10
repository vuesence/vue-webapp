import type {
  JsonRpcPayload,
  JsonRpcPayloadOptions,
  JsonRpcPayloadParams,
  JsonRpcRequestMessage,
  JsonRpcResponseMessage,
} from "./jsonrpc.interfaces";
import http from "./http";

let jsonCounter = 0;
let logout;
let metaDataCallback = () => {};

const responseInterceptors = [];

const jsonrpc = {

  addResponseInterceptor(interceptor) {
    responseInterceptors.push(interceptor);
  },
  setLogoutCallback(_logout) {
    logout = _logout;
  },
  setMetaDataCallback(_metaDataCallback) {
    metaDataCallback = _metaDataCallback;
  },

};

/**
 * Executes a JSON-RPC request and returns the response data.
 *
 * @param {JsonRpcPayload | Array<JsonRpcPayload>} payload - The JSON-RPC payload(s) to execute.
 * @param {JsonRpcPayloadOptions} [options] - Options for the JSON-RPC request.
 * @return {Promise<any>} A promise that resolves with the response data.
 */
async function jsonRpc(
  payload: JsonRpcPayload | Array<JsonRpcPayload>,
  options?: JsonRpcPayloadOptions,
) {
  let data: JsonRpcRequestMessage | Array<JsonRpcRequestMessage>;
  // const auth = useAuth();
  try {
    if (Array.isArray(payload)) {
      data = payload.map((message) => {
        return buildRequestMessage(message, options);
      });
    } else {
      data = buildRequestMessage(payload, options);
    }

    const response = await http.post(data, buildUri(payload, options));
    // const response = await axios.request(config);
    if (options?.fullResponse) {
      responseInterceptors.forEach((interceptor) => {
        interceptor.process(response);
      });
      return response;
    }

    if (Array.isArray(response)) {
      response.forEach((msg: JsonRpcResponseMessage) => {
        responseInterceptors.forEach((interceptor) => {
          interceptor.process(msg);
        });
      });
      return response;
    } else {
      responseInterceptors.forEach((interceptor) => {
        interceptor.process(response);
      });
      if (response.result) {
        return response.result;
      }
    }
  } catch (error) {
    console.log(error);
    if (error.response?.status === 401) {
      logout();
    }
  }
}
/**
 * Builds a JSON-RPC request message from the given payload and options.
 *
 */
function buildRequestMessage(
  payload: JsonRpcPayload,
  options?: JsonRpcPayloadOptions,
): JsonRpcRequestMessage {
  const message: JsonRpcRequestMessage = {
    jsonrpc: "2.0",
    method: payload.method,
    params: payload.params || {},
  };

  if (!options?.isNotification) {
    message.id = payload.id ?? jsonCounter++;
  }
  message.params.meta = metaDataCallback();
  // message.params.meta = {
  //   ...metaData,
  //   at: getToken(),
  // };
  // Object.assign(message.params, { meta: {...metaData, { token: getToken() }});
  return message;
}

/**
 * Returns the URI based on the given payload and options.
 *
 * @param {JsonRpcPayload | Array<JsonRpcPayload>} payload - The payload or array of payloads.
 * @param {JsonRpcPayloadOptions} [options] - The options that may contain the URI.
 * @return {string} The URI for the given payload and options.
 */
function buildUri(
  payload: JsonRpcPayload | Array<JsonRpcPayload>,
  options?: JsonRpcPayloadOptions,
) {
  if (options?.uri) {
    return options?.uri;
  }
  if (Array.isArray(payload)) {
    return (
      `batch[${payload.map((p: JsonRpcPayload) => p.method).join("+")}]`
    );
  } else {
    return payload.method.replace(".", "/");
  }
}

// export function _jsonRpc(
//   payload: JsonRpcPayload | Array<JsonRpcPayload>,
//   options?: JsonRpcPayloadOptions,
// ) {
//   return jsonrpc.jsonRpc(payload, options);
// }

export {
  type JsonRpcPayloadOptions,
  type JsonRpcPayload,
  type JsonRpcPayloadParams,
  type JsonRpcRequestMessage,
  type JsonRpcResponseMessage,
  jsonRpc,
};

export default jsonrpc;
