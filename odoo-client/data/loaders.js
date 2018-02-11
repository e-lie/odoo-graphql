import DataLoader from 'dataloader';
import { getPartner } from './models/partners';
import { getUser, getUserByPartnerId } from './models/users';

export default () => ({
  partners: new DataLoader(partnerIds => Promise.all(partnerIds.map(getPartner))),
  users: new DataLoader(usersIds => Promise.all(usersIds.map(getUser))),
  usersByPartnerId: new DataLoader(partnerIds => Promise.all(partnerIds.map(getUserByPartnerId))),
});
