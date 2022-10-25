import axios from ".";
import keycloak from "../keycloak";

/**
 * SAMPLE FUNCTION: Fetch products from a REST API
 * @returns { Promise<{ packages: [], error: null | string }>} response
 */
export const fetchPackage = async () => {

  const shipmentURL = process.env.REACT_APP_API_URL + "shipments/";

  try {
    const { data } = await axios.get(shipmentURL);
    //console.log(data);
    return Promise.resolve({
      shipments: data,
      error: null,
    });
  }
  catch (e) {
    return {
      shipments: [],
      error: e.message,
    };
  }
};

/**
 * Fetch a product by its id.
 * @param {number} packageId
 * @returns {Promise<{package: { id, receiver_name, weight, color, date, status, appUser, country, totalSum } | null, error: null}>}
 */
export const fetchPackageById = async (packageId) => {
  const shipmentURL = process.env.REACT_APP_API_URL + "shipments/customer";

  try {
    const { data, status } = await axios.get(shipmentURL + "/" + packageId);
    console.log(status)
    return Promise.resolve({
      shipments: data,
      error: null,
    });
  }
  catch (e) {
    return {
      shipments: null,
      error: e.message,
    };
  }
};


/**
 * SAMPLE FUNCTION: Fetch packages from a REST API
 * @returns { Promise<{ packages: [], error: null | string }>} response
 */
 export const fetchCompletedPackage = async () => {

  const shipmentURL = process.env.REACT_APP_API_URL + "shipments/complete";

  try {
    const { data } = await axios.get(shipmentURL);
    console.log(data);
    return Promise.resolve({
      shipments: data,
      error: null,
    });
  }
  catch (e) {
    return {
      shipments: [],
      error: e.message,
    };
  }
};

/**
 * SAMPLE FUNCTION: Fetch packages from a REST API
 * need to push new version
 * @returns { Promise<{ packages: [], error: null | string }>} response
 */
 export const fetchCancelledPackage = async () => {

  const shipmentURL = process.env.REACT_APP_API_URL + "shipments/cancelled";

  try {
    const { data } = await axios.get(shipmentURL);
    console.log(data);
    return Promise.resolve({
      shipments: data,
      error: null,
    });
  }
  catch (e) {
    return {
      shipments: [],
      error: e.message,
    };
  }
};


