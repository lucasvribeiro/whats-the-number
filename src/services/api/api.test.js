import axios from "axios";
import { getNumber } from "./api";
import { MIN_VALUE, MAX_VALUE, BASE_URL } from "../consts";

jest.mock("axios");

describe("api service", () => {
  it("should get the random number from API", async () => {
    const mockValue = 155;
    axios.get.mockResolvedValueOnce(mockValue);

    const result = await getNumber();

    expect(result).toEqual(mockValue);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/rand?min=${MIN_VALUE}&max=${MAX_VALUE}`
    );
  });
});
