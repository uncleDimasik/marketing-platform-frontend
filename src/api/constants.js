const API_BASE_URL = import.meta.env.VITE_API_URL;

const API_RESOURCES = {
  AUTH: 'auth',
  USER: 'user',
};

const API_ENDPOINTS = {
  //auth
  LOGIN: 'login',
  LOGOUT: 'logout',
  REGISTER: 'register',
  REFRESH_TOKEN: 'refresh',
  // user
  USERS: 'users',
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
    typeof endpoint === 'function' ? endpoint(param) : endpoint;

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
