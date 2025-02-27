export const HTTP_ERROR_CODES = {
    ABORTED: -1,
    TIMEOUT: 0,
    UNPROCESSABLE_ENTITY: 422,
    UNAUTHORIZED: 401,
    UNLOCK: 403,
    TOO_MANY_REQUESTS: 429
};

export const API_CUSTOM_ERROR_CODES = {
    HUMAN_VERIFICATION_REQUIRED: 9001,
    AUTH_ACCOUNT_DISABLED: 10003,
    TOKEN_INVALID: 12087
};

export const EVENT_ERRORS = {
    MAIL: 1,
    CONTACTS: 2
};
