import API from "../utils/API";
import client from "braintree-web/client";
import hostedFields from "braintree-web/hosted-fields";
import { getLastItem } from "../utils/misc";

const api = new API();

export const addressFormatter = (address1, address2, city, state, zip) => {
  const address =
    address1 + " " + address2 + " " + city + ", " + state + " " + zip;
  return address;
};

export function sendNAEmail(values) {
  api.post("cashPaymentAPI", {
    body: values,
  });
}

export async function saveRegistrations(values, classValue) {
  let response = api.post("registrationsAPI", {
    body: values,
  });
  api.post("initialRegistrationAPI", {
    body: values,
  });
}

export async function processOrder(values) {
  const response = await api.post("orderPaymentAPI", {
    body: values,
  });
  const transactionId = response.data.transaction.id;
  return transactionId;
}

async function brainTreeCreateHostedFields(clientErr, clientInstance) {
  if (clientErr) {
    console.log(clientErr);
    return;
  }

  let options = {
    client: clientInstance,
    styles: {
      "input.invalid": {
        color: "red",
      },
      "input.valid": {
        color: "green",
      },
    },
    fields: {
      number: {
        container: "#card-number",
        placeholder: "xxxx xxxx xxxx xxxx",
        maxCardLength: 16,
      },
      cvv: {
        container: "#cvv",
        placeholder: "xxx",
      },
      expirationDate: {
        container: "#expiration-date",
        placeholder: "xx/xx",
      },
    },
  };

  hostedFields.create(
    options,
    function (hostedFieldsErr, hostedFieldsInstance) {
      if (hostedFieldsErr) {
        console.error(hostedFieldsErr);
        return;
      }

      let form;
      form = document.querySelector("#registration-form");

      form.addEventListener(
        "submit",
        async function (event) {
          event.preventDefault();
          await hostedFieldsInstance.tokenize(async function (
            tokenizeErr,
            payload
          ) {
            if (tokenizeErr) {
              console.error(tokenizeErr);
              return;
            }
            // TODO there may be a better way to do this ultimately, but this works well for now.
            const amount = document.querySelector("#amount").value;
            const order = { amount, paymentMethodNonce: payload.nonce };

            const transactionId = await processOrder(order);

            const page = getLastItem(window.location.href);
            let values;
            if (page === "balance") {
              values = getBalanceValues();
            } else {
              values = getValues();
            }

            values.transaction_id = transactionId;
            saveRegistrations(values);

            // Hack because we need to trigger the React component from inside the Braintree form override.
            // Ideally we replace this eventually, if we can find Braintree/React integration that works well
            event = document.createEvent("HTMLEvents");
            event.initEvent("braintreefinished", true, true);
            event.eventName = "braintreefinished";
            form.dispatchEvent(event);
          });
        },
        false
      );
    }
  );
}

// Both of these are inefficient - Braintree hack - may be possible to write it cleaner

function getBalanceValues() {
  const firstname = document.querySelector("#formFName").value;
  const lastname = document.querySelector("#formLName").value;
  const values = {
    firstname,
    lastname,
  };
  return values;
}

function getValues() {
  const firstname = document.querySelector("#formFName").value;
  const lastname = document.querySelector("#formLName").value;
  const email = document.querySelector("#formEmail").value;
  const phone_number = document.querySelector("#formPhone").value;
  const address1 = document.querySelector("#formAddress1").value;
  const address2 = document.querySelector("#formAddress2").value;
  const city = document.querySelector("#formCity").value;
  const state = document.querySelector("#formState").value;
  const zip = document.querySelector("#formZip").value;
  //const address = addressFormatter(address1, address2, city, state, zip);
  const classValue = document.querySelector("#formClass").value;
  // TODO kind of a hack, is there a better way to do this?
  const depositcheck = document.querySelector("#formDepositTrue").value;
  const amount = document.querySelector("#amount").value;
  const deposit = document.querySelector("#deposit").value;
  const title = document.querySelector("#title").value;
  const date = document.querySelector("#date").value;
  const classroom_location = document.querySelector(
    "#classroom_location"
  ).value;
  const class_type = document.querySelector("#class_type").value;
  const captain = document.querySelector("#captain").value;
  const values = {
    email,
    firstname,
    lastname,
    phone_number,
    address1,
    address2,
    city,
    state,
    zip,
    class: classValue,
    depositcheck,
    amount,
    deposit,
    title,
    date,
    classroom_location,
    class_type,
    captain,
  };
  return values;
}

export async function brainTreeCreate() {
  const response = await api.get("orderTokenAPI", {
    params: { fake_id: "fakeId" },
  });
  client.create(
    {
      authorization: response.data.clientToken,
    },
    brainTreeCreateHostedFields
  );
}
