import API from "../utils/API";

const api = new API();

export async function getClasses() {
  const response = await api.get("classesAPI", {
    query: {
      date_gte: new Date().toLocaleDateString("en-CA"),
    },
  });
  const classes = response.data.map((item) => {
    return {
      id: item.id,
      date: item.date,
      money_date: item.money_date,
      city: item.city.city,
      class_type: item.class_type.class_type,
      state: item.state.state,
      captain: item.captain.fullname,
      details: item.details,
      information: item.information,
      other_information: item.other_information,
      classroom_location: item.classroom_location,
      title: item.title,
      // change to reflect braintree standards?
      amount: item.cost,
      deposit: item.deposit,
    };
  });
  return classes;
}
