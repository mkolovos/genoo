import axios from "axios";
import { JokeInterface } from "../types/joke";
const baseURL = "https://api.chucknorris.io/jokes/";

export const getRandomJoke = async (
  category?: string
): Promise<Array<JokeInterface>> => {
  let params = {};
  if (category) {
    params = { category };
  }
  try {
    const res = await axios.get("random", {
      params,
      baseURL
    });
    return [res.data as JokeInterface];
  } catch (err) {
    throw err;
  }
};

export const queryJoke = async (
  query: string
): Promise<Array<JokeInterface>> => {
  const params = { query };
  try {
    const res = await axios.get("search", {
      params,
      baseURL
    });
    return res.data.result as Array<JokeInterface>;
  } catch (err) {
    throw err;
  }
};

export const getCategories = async (): Promise<Array<string>> => {
  try {
    const categories = await axios.get("categories", {
      baseURL
    });
    return categories.data;
  } catch (err) {
    throw err;
  }
};
