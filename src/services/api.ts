import axios from "axios";

export const API_KEY = "kUrMQYoyD01D7ZEeeMGqntXS3YIO3TO-Ltfn-b5aUOQ";
export const BASE_URL = "https://api.unsplash.com";

export const fetchImages = async <T> (
  url:string,
  {
    client_id = API_KEY,
    query = "",
    page = 1,
    per_page = 9,
    orientation = "landscape",
  } = {}
) => {
  const { data } = await axios.get<T>(url, {
    params: { client_id, query, page, per_page, orientation },
    baseURL: BASE_URL,
  });
  
  return data;
};
