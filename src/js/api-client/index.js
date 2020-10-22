// import mock from './api-client-mock';
import prod from './api-client-prod';

// const service = process.env.NODE_ENV === 'production' ? prod : mock;
const service = prod;

export { service as default };
