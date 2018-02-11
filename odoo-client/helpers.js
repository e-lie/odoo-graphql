import { uid, db, password } from './authentication';
import { getDataClient } from './data-client';

const CREATE_ACTION= 'create';
const UPDATE_ACTION = 'write';
const EXECUTE_KW = 'execute_kw';
const SEARCH_READ = 'search_read';

const executeKw = argsAsArray => {
  return new Promise((resolve, reject) => {
    return getDataClient().methodCall(EXECUTE_KW, [...argsAsArray], (err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value);
      }
    })
  });
};

export const getRecords = (modelName, domain, fields, limit = 1) =>
  executeKw([db, uid, password, modelName, SEARCH_READ, domain, { fields, limit }]);

export const getSingleRecord = (modelName, domain, fields) =>
  getRecords(modelName, domain, fields, 1).then(resp => resp && resp[0] ? resp[0] : null);

export const createRecord = (modelName, dict) =>
  executeKw([db, uid, password, modelName, CREATE_ACTION, [dict]]);

export const updateRecord = (modelName, id, dict) =>
  executeKw([db, uid, password, modelName, UPDATE_ACTION, [[parseInt(id, 10)], dict]]);