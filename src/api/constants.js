const API_BASE_URL = import.meta.env.VITE_API_URL;

const API_RESOURCES = {
  AUTH: 'auth',
  USERS: 'users',
  // Добавляйте другие ресурсы по мере необходимости
};

const API_ENDPOINTS = {
  //auth
  LOGIN: 'login',
  LOGOUT: 'logout',
  REGISTER: 'register',
  REFRESH_TOKEN: 'refresh',
  // user
  WHO_AM_I: 'whoAmI',
  //
  GET: (id) => `${id}`,
};

const API_STATUSES = {
  UNAUTHORIZED: 401,
};

const ACCESS_TOKEN = 'token';

function createApiUrl(resource, endpoint, param) {
  const resourcePath = API_RESOURCES[resource.toUpperCase()];
  if (!resourcePath) {
    throw new Error(`Resource ${resource} not found`);
  }

  const endpointPath =
    typeof endpoint === 'function'
      ? endpoint(param)
      : API_ENDPOINTS[endpoint.toUpperCase()];
  if (!endpointPath) {
    throw new Error(`Endpoint ${endpoint} not found`);
  }

  return `${resourcePath}/${endpointPath}`;
}

export {
  API_BASE_URL,
  API_ENDPOINTS,
  API_RESOURCES,
  API_STATUSES,
  ACCESS_TOKEN,
  createApiUrl,
};
