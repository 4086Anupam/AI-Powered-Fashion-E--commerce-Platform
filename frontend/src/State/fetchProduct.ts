import axios from "axios";

export const api = "http://localhost:5454";

export const fetchProduct = async () => {
  try {
    const response = await axios.get(api);
    console.log("Response", response);
  } catch (error) {
    console.log(error);
  }
};

// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:5454", // ✅ No /products here
// });
