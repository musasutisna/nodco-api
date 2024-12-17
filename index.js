const Axios = require('axios');

/**
 * Axios request instance.
 *
 * @param   object
 * @param   object
 * @return  object
 */
module.exports = function nodcAPIConfig(apiConfig, defaultConfig = {}) {
  const api = Axios.create(apiConfig);

  function combineWithDefaultConfig(config) {
    var newConfig = {};

    if (defaultConfig instanceof Object) {
      newConfig = { ...defaultConfig };
    }

    if (config instanceof Object) {
      newConfig = { ...newConfig, ...config };
    }

    return newConfig;
  }

  async function apiGET(url, config = null) {
    let result = { 
      response: null,
      error: null
    };

    config = combineWithDefaultConfig(config);

    try {
      result.response = await api.get(url, config);
    } catch (err) {
      result.error = err;
    }

    return result;
  }

  async function apiPOST(url, data = null, config = null) {
    let result = {
      response: null,
      error: null
    };

    config = combineWithDefaultConfig(config);

    try {
      result.response = await api.post(url, data, config);
    } catch (err) {
      result.error = err;
    }

    return result;
  }

  async function apiPUT(url, data = null, config = null) {
    let result = {
      response: null,
      error: null
    };

    config = combineWithDefaultConfig(config);

    try {
      result.response = await api.put(url, data, config);
    } catch (err) {
      result.error = err;
    }

    return result;
  }

  async function apiPATCH(url, data = null, config = null) {
    let result = {
      response: null,
      error: null
    };

    config = combineWithDefaultConfig(config);

    try {
      result.response = await api.patch(url, data, config);
    } catch (err) {
      result.error = err;
    }

    return result;
  }

  async function apiDELETE(url, config = null) {
    let result = {
      response: null,
      error: null
    };

    config = combineWithDefaultConfig(config);

    try {
      result.response = await api.delete(url, config);
    } catch (err) {
      result.error = err;
    }

    return result;
  }

  return {
    apiGET,
    apiPOST,
    apiPUT,
    apiPATCH,
    apiDELETE
  }
};
