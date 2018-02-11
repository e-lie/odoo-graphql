import { getRecords, getSingleRecord, updateRecord } from './utils/helpers';

const USER_DB_KEY = 'res.users';
const DEFAULT_KEYS = ['id', 'name', 'partner_id'];

export const getUsers = () => getRecords(USER_DB_KEY, [], DEFAULT_KEYS, 1000);

export const getUser = id => getSingleRecord(USER_DB_KEY, [[['id', '=', id]]], DEFAULT_KEYS);

export const getUserByPartnerId = id =>
  getSingleRecord(USER_DB_KEY, [[['partner_id', '=', id]]], DEFAULT_KEYS);

export const editUser = (id, dict) => updateRecord(USER_DB_KEY, id, dict);
