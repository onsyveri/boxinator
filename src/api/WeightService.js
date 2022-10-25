import axios from ".";

/**
 * SAMPLE FUNCTION: Fetch products from a REST API
 * @returns { Promise<{ countries: [], error: null | string }>} response
 */
export const fetchWeight = async () => {

  const weightURL = process.env.REACT_APP_API_URL + "weight";

  try {
    const { data } = await axios.get(weightURL);
    return Promise.resolve({
      weights: data,
      error: null,
    });
  }
  catch (e) {
    return {
      weights: [],
      error: e.message,
    };
  }
};

/**
 * Fetch a product by its id.
 * @param {string} id
 * @returns {Promise<{product: { id, value, packages[] } | null, error: null}>}
 */
export const fetchWeightById = async (id) => {
  const weightURL = process.env.REACT_APP_API_URL + "weight";

  try {
    const { data, status } = await axios.get(weightURL + "/" + id);
    console.log(status)
    return Promise.resolve({
      weights: data,
      error: null,
    });
  }
  catch (e) {
    return {
      weights: null,
      error: e.message,
    };
  }
}