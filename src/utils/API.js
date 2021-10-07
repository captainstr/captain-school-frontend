import axios from "axios";
import axiosRetry from "axios-retry";
import format from "string-format";

/**
 * NOTE: STRAPI IS VERY FINICKY WITH THE APIs AND SLASHES
 */

let prefix = "/";

class API {
  constructor() {
    this.config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    this.env = "local";
  }

  defaultArgs = {
    params: null,
    body: {},
    query: {},
  };

  call = null;
  retry = 1;

  setRetry(value) {
    this.retry = value;
  }

  localBaseUrlString = "http://localhost:1337";
  devBaseUrlString = "https://dev.api.captainsschool.com";
  prodBaseUrlString = "https://api.captainsschool.com";

  captainsAPI = prefix + "captains/";

  classesAPI = prefix + "classes/";

  registrationsAPI = prefix + "registrations/";

  orderTokenAPI = prefix + "orders/gettoken/{fake_id}";
  orderPaymentAPI = prefix + "orders/payment/";

  returnVals(data) {
    return data;
  }

  get(API, args = this.defaultArgs) {
    this.call = "GET";
    let constructedURL = this.constructURL(API, args);
    axiosRetry(axios, { retries: this.retry });
    return axios.get(constructedURL, this.config);
  }

  post(API, args = this.defaultArgs) {
    this.call = "POST";
    let constructedURL = this.constructURL(API, args);
    let body = args["body"];
    axiosRetry(axios, { retries: this.retry });
    return axios.post(constructedURL, body, this.config);
  }

  put(API, args = this.defaultArgs) {
    this.call = "PUT";
    let constructedURL = this.constructURL(API, args);
    let body = args["body"];
    axiosRetry(axios, { retries: this.retry });
    return axios.put(constructedURL, body, this.config);
  }

  patch(API, args = this.defaultArgs) {
    this.call = "PATCH";
    let constructedURL = this.constructURL(API, args);
    let body = args["body"];
    axiosRetry(axios, { retries: this.retry });
    return axios.patch(constructedURL, body, this.config);
  }

  delete(API, args = this.defaultArgs) {
    this.call = "DELETE";
    let constructedURL = this.constructURL(API, args);
    let body = args["body"];
    axiosRetry(axios, { retries: this.retry });
    return axios.delete(constructedURL, body, this.config);
  }

  constructURL(API, args) {
    let constructedURL;
    let endpoint;
    if ("params" in args) {
      endpoint = format(this[API], args.params);
    } else {
      endpoint = this[API];
    }
    if (this.env === "local") {
      constructedURL = this.localBaseUrlString + endpoint;
    } else if (this.env === "dev") {
      constructedURL = this.devBaseUrlString + endpoint;
    } else if (this.env === "prod") {
      constructedURL = this.prodBaseUrlString + endpoint;
    }

    if ("query" in args) {
      constructedURL = this.queryProcess(constructedURL, args);
    }

    return constructedURL;
  }

  queryProcess(constructedURL, args) {
    let argumentStr = "?";
    let count = 0;
    const keys = Object.keys(args["query"]);
    for (const key of keys) {
      if (count !== 0) {
        argumentStr += "&";
      }
      argumentStr += key + "=" + args["query"][key];
      count++;
    }
    constructedURL = constructedURL + argumentStr;
    return constructedURL;
  }
}

export default API;
