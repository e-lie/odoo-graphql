import { createRecord, getRecords, getSingleRecord, updateRecord } from './helpers';

const PARTNER_DB_KEY = 'res.partner';
const DEFAULT_KEYS = ['id', 'name'];

export const getPartners = () => {
  return getRecords(PARTNER_DB_KEY, [], DEFAULT_KEYS, 1000);
};

export const getPartner = (id) => {
  return getSingleRecord(PARTNER_DB_KEY, [[['id', '=', id]]], DEFAULT_KEYS);
};

export const createPartner = (dict) => {
  return createRecord(PARTNER_DB_KEY, dict);
};

export const editPartner = (id, dict) => {
  return updateRecord(PARTNER_DB_KEY, id, dict);
};
