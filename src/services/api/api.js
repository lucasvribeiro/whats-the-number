import axios from "axios";
import { MIN_VALUE, MAX_VALUE, BASE_URL } from "../consts";

/**
 * @summary Get the random number from API, according to the MIN_VALUE and MAX_VALUE from consts.
 */
export const getNumber = () => {
  return axios.get(`${BASE_URL}/rand?min=${MIN_VALUE}&max=${MAX_VALUE}`);
};
