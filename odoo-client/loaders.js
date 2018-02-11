import DataLoader from 'dataloader';
import { getPartner } from './partners';
import { getUser, getUserByPartnerId } from './users';

export default () => {
  return {
    partners: new DataLoader(partnerIds => Promise.all(partnerIds.map(getPartner))),
    users: new DataLoader(usersIds => Promise.all(usersIds.map(getUser))),
    usersByPartnerId: new DataLoader(partnerIds => Promise.all(partnerIds.map(getUserByPartnerId))),
  };
};