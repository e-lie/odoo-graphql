import { createRecord, getRecords, getSingleRecord, updateRecord } from './utils/helpers';

const PARTNER_DB_KEY = 'res.partner';
const DEFAULT_KEYS = ['id', 'name'];

export const getPartners = () => getRecords(PARTNER_DB_KEY, [], DEFAULT_KEYS, 1000);

export const getPartner = id => getSingleRecord(PARTNER_DB_KEY, [[['id', '=', id]]], DEFAULT_KEYS);

export const createPartner = dict => createRecord(PARTNER_DB_KEY, dict);

export const editPartner = (id, dict) => updateRecord(PARTNER_DB_KEY, id, dict);
