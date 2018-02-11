import { db, getUid, password } from '../../../authentication-client';
import getDataClient from '../../../data-client';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'write';
const EXECUTE_KW = 'execute_kw';
const SEARCH_READ = 'search_read';

export const executeKw = argsAsArray => new Promise((resolve, reject) =>
  getDataClient().methodCall(EXECUTE_KW, argsAsArray, (err, value) => {
    if (err) {
      reject(err);
    } else {
      resolve(value);
    }
  }));

export const getRecords = (modelName, domain, fields, limit = 1) =>
  executeKw([db, getUid(), password, modelName, SEARCH_READ, domain, { fields, limit }]);

export const getSingleRecord = (modelName, domain, fields) =>
  getRecords(modelName, domain, fields, 1)
    .then((resp) => { if (resp && resp[0]) { return resp[0]; } return null; });

export const createRecord = (modelName, dict) =>
  executeKw([db, getUid(), password, modelName, CREATE_ACTION, [dict]]);

export const updateRecord = (modelName, id, dict) =>
  executeKw([db, getUid(), password, modelName, UPDATE_ACTION, [[parseInt(id, 10)], dict]]);
