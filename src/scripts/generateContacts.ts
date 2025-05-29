import { Contact } from '../types/types.ts';
import { createFakeContact } from '../utils/createFakeContact.ts';
import { writeContacts } from '../utils/writeContacts.ts';

const generateContacts = async (number:number)=> {
  const contacts:Contact[] = Array(number).fill(0).map(createFakeContact)
  writeContacts(contacts)
};

generateContacts(5);
