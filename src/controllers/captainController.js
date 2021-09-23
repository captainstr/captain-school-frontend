import API from "../utils/API";

const api = new API();

export async function getActiveCaptains() {
  const response = await api.get("captainsAPI", {
    query: { slug_null: false },
  });
  const captains = response.data;
  return captains;
}

export async function getSpecificCaptain(slug) {
  const response = await api.get("captainsAPI", {
    query: { slug },
  });
  const captain = response.data[0];
  return captain;
}
