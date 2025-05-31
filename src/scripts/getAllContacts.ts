import { readContacts } from '../utils/readContacts.ts';
import { Contact } from '../types/types.ts';

export const getAllContacts = async ():Promise<Contact[]>=> {
  return readContacts()
};

console.log(await getAllContacts());
