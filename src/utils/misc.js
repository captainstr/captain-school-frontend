import { useLocation } from "react-router-dom";

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const getLastItem = (url) => {
  url = url.split("?");
  url = url[0];
  url = url.split("/");
  let page = url[url.length - 1];
  return page;
};
