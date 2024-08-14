const BASE_URL=import.meta.env.VITE_API_URL;
const API_BASE_URL = 'https://api.example.com';

const API_ENDPOINTS = {
    AUTH: {
        BASE: `${API_BASE_URL}/auth`,
        LOGIN: '/login',
        LOGOUT: '/logout',
        REGISTER: '/register',
        REFRESH_TOKEN: '/refresh',
        VERIFY_EMAIL: (verificationCode) => `/verifyemail/${verificationCode}`,
    },
    USERS: {
        BASE: `${API_BASE_URL}/users`,
        PROFILE: '/profile',
        UPDATE: '/update',
        DELETE: (userId) => `/${userId}/delete`,
    },
    POSTS: {
        BASE: `${API_BASE_URL}/posts`,
        CREATE: '/create',
        UPDATE: (postId) => `/${postId}/update`,
        DELETE: (postId) => `/${postId}/delete`,
        GET: (postId) => `/${postId}`,
    },
};

const loginUrl = `${API_ENDPOINTS.AUTH.BASE}${API_ENDPOINTS.AUTH.LOGIN}`;
const verifyEmailUrl = `${API_ENDPOINTS.AUTH.BASE}${API_ENDPOINTS.AUTH.VERIFY_EMAIL('12345')}`;
const deleteUserUrl = `${API_ENDPOINTS.USERS.BASE}${API_ENDPOINTS.USERS.DELETE('userId')}`;

export { API_BASE_URL, API_ENDPOINTS };
