import API from "../utils/API";

const api = new API();

export async function getClasses() {
  const response = await api.get("classesAPI");
  const classes = response.data.map((item) => {
    return {
      id: item.id,
      date: item.date,
      city: item.city.city,
      class_type: item.class_type.class_type,
      state: item.state.state,
      captain: item.captain.fullname,
      details: item.details,
    };
  });
  return classes;
}
