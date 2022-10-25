import axios from ".";

/**
 * SAMPLE FUNCTION: Fetch products from a REST API
 * @returns { Promise<{ countries: [], error: null | string }>} response
 */
export const fetchCountry = async () => {

  const countryURL = process.env.REACT_APP_API_URL + "settings/countries/get";

  try {
    const { data } = await axios.get(countryURL);
    return Promise.resolve({
      countries: data,
      error: null,
    });
  }
  catch (e) {
    return {
      countries: [],
      error: e.message,
    };
  }
};

/**
 * Fetch a product by its id.
 * @param {number} id
 * @returns {Promise<{product: { id, multiplier, packages } | null, error: null}>}
 */
export const fetchCountryById = async (id) => {
  const accountURL = process.env.REACT_APP_API_URL + "account";

  try {
    const { data, status } = await axios.get(accountURL + "/" + id);
    console.log(status)
    return Promise.resolve({
      countries: data,
      error: null,
    });
  }
  catch (e) {
    return {
      countries: null,
      error: e.message,
    };
  }
}

