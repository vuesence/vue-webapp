"use strict";

class HttpRequest {
  constructor(method, uri, contentType, headers) {
    this._fetchingPromise = null;
    this.xhr = new XMLHttpRequest();
    if (!!method && !!uri) {
      this.xhr.open(method, uri);
    }
    if (contentType) {
      this.xhr.setRequestHeader("Content-Type", contentType);
    }
    // if (headers && headers.length) {
    if (headers) {
      Object.keys(headers).forEach((key) => {
        this.xhr.setRequestHeader(key, headers[key]);
      });
      // headers.forEach((h) => {
      //   this.xhr.setRequestHeader(h.header, h.value);
      // });
    }
  }

  open(method, uri) {
    if (!!method && !!uri) {
      this.xhr.open(method, uri);
    }
  }

  setRequestHeader(header, value) {
    if (!!header && !!value) {
      this.xhr.setRequestHeader(header, value);
    }
  }

  getAllResponseHeaders() {
    return this.headers;
  }

  fetchFromServer(payload) {
    let ret = null;

    ret = new Promise((resolve, reject) => {
      this.xhr.onload = function () {
        if (this.readyState === this.HEADERS_RECEIVED) {
          this.headers = this.xhr.getAllResponseHeaders();
        }

        if (this.xhr.status === 200) {
          const d = JSON.parse(this.xhr.responseText, (k, v) => {
            if (!!v && ((k === "createdon" || k === "updatedon" || k === "askedon"
              || k === "publishedon" || k === "lastUpdated") && Date.parse(v))) {
              return new Date(v);
            }
            if (!!v && (k === "json") && typeof v == "string") {
              return JSON.parse(v);
            }
            return v;
          });
          resolve(
            {
              json: d,
              headers: this.headers,
            },
          );
        } else {
          reject(this.xhr.statusText || (`status ${this.xhr.status}`));
        }
        this._fetchingPromise = null;
      }.bind(this);

      this.xhr.onerror = (e) => {
        reject(e.target.status);
        this._fetchingPromise = null;
      };

      if (payload instanceof FormData) {
        this.xhr.send(payload);
      } else {
        this.xhr.send(JSON.stringify(payload));
      }

      // this.xhr.onreadystatechange = function () {
      //  if (this.readyState == this.HEADERS_RECEIVED) {
      //    console.log("headers", request.getAllResponseHeaders());
      //  }
      // }
    });

    return ret;
  }

  send(payload) {
    if (!this._fetchingPromise) {
      this._fetchingPromise = this.fetchFromServer(payload);
    }

    return this._fetchingPromise;
  }
}

export default HttpRequest;
