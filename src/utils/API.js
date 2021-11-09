import axios from "axios";
import axiosRetry from "axios-retry";
import format from "string-format";
import {
  localBaseUrlString,
  devBaseUrlString,
  prodBaseUrlString,
} from "../resources/data/constants";

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

  captainsAPI = prefix + "captains/";

  classesAPI = prefix + "classes/";

  registrationsAPI = prefix + "registrations/";

  orderTokenAPI = prefix + "orders/gettoken/{fake_id}";
  orderPaymentAPI = prefix + "orders/payment/";
  cashPaymentAPI = prefix + "orders/cashpayment/";

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
    if (process.env.NODE_ENV === "local") {
      constructedURL = localBaseUrlString + endpoint;
    } else if (process.env.NODE_ENV === "development") {
      constructedURL = devBaseUrlString + endpoint;
    } else if (process.env.NODE_ENV === "production") {
      constructedURL = prodBaseUrlString + endpoint;
    } else {
      constructedURL = localBaseUrlString + endpoint;
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
