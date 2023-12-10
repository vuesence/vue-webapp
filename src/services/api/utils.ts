import http from "./http";
import { jsonRpc } from "./jsonrpc";

const utils = {

  async testRest() {
    return http.get("https://jsonplaceholder.typicode.com/todos/1");
  },

  async testJsonRpc() {
    return jsonRpc({
      method: "getBestBlockHash",
      params: {},
    }, { uri: "https://seed-1.testnet.networks.dash.org:1443/" });
  },

};

export default utils;
