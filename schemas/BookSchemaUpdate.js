const bookSchemaUpdate = {
  type: "object",
  properties: {
    isbn: { type: "string" },
    amazon_url: { type: "string", format: "uri" },
    author: { type: "string" },
    language: { type: "string" },
    pages: { type: "integer", minimum: 1 },
    publisher: { type: "string" },
    title: { type: "string" },
    year: { type: "integer", minimum: 1000, maximum: 9999 },
  },
  required: [], // No fields are required for an update
  minProperties: 1, // At least one property must be provided for update
  additionalProperties: false,
};

module.exports = bookSchemaUpdate;
