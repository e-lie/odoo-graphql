import getFields from '../../../odoo-client/data/models/fields';

const reshapeFieldsGetResponse = fieldsGetRespAsArray =>
  Object.keys(fieldsGetRespAsArray)
    .reduce((acc, value) =>
      [...acc, {
        id: value,
        description: fieldsGetRespAsArray[value].help,
        name: fieldsGetRespAsArray[value].string,
        ...fieldsGetRespAsArray[value],
      }], []);

export default {
  Query: {
    modelFields: (root, { model }) =>
      getFields(model)
        .then(fields => reshapeFieldsGetResponse(fields)),
  },
};
