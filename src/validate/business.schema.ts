import { JSONSchema7 } from 'json-schema';

export const catalogSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    number: { type: 'string' },
    limit: { type: 'number' },
    cursor: { type: 'string' },
  },
};

export const productSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    number: { type: 'string' },
    limit: { type: 'number' },
    cursor: { type: 'string' },
    productId: { type: 'string', minLength: 1 },
  },
  required: ['productId'],
};

export const collectionsSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    number: { type: 'string' },
    limit: { type: 'number' },
  },
};
