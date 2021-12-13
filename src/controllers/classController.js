import API from "../utils/API";

const api = new API();

export async function getClasses() {
  const response = await api.get("classesAPI", {
    query: {
      date_gte: new Date().toLocaleDateString("en-CA"),
      _sort: "date",
    },
  });

  // TODO move to more general controller?
  const formatDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US");
  };

  const classes = response.data.map((item) => {
    return {
      id: item.id,
      date: formatDate(item.date),
      money_date: formatDate(item.money_date),
      city: item.city.city,
      class_type: item.class_type.class_type,
      state: item.state.state,
      captain: item.captain.fullname,
      details: item.details,
      information: item.information,
      other_information: item.other_information,
      classroom_location: item.classroom_location,
      location: item.location,
      title: item.title,
      // change to reflect braintree standards?
      amount: item.cost,
      deposit: item.deposit,
    };
  });
  return classes;
}
