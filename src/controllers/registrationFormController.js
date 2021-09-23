import API from "../utils/API";

const api = new API();

export async function saveRegistrations(values) {
  const response = await api.post("registrationsAPI", {
    body: values,
  });
  console.log("reg response");
  console.log(response);
}
