import API from "../utils/API";

const api = new API();

export async function getRegistrations() {
  const response = await api.get("registrationsAPI", {});
  const registrations = response.data;
  console.log("registrations");
  console.log(registrations);
  return registrations;
}
