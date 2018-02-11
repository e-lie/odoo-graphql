import { executeKw } from './utils/helpers';
import { db, getUid, password } from '../../authentication-client';

const FIELDS_GET = 'fields_get';
const attributes = { attributes: ['string', 'help', 'type'] };

// List record fields
export default modelName =>
  executeKw([db, getUid(), password, modelName, FIELDS_GET, [], attributes]);
