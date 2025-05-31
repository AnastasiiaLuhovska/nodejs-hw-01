import { Contact } from '../types/types.ts';
import { createFakeContact } from '../utils/createFakeContact.ts';
import { writeContacts } from '../utils/writeContacts.ts';
import { readContacts } from '../utils/readContacts.ts';

const generateContacts = async (number:number)=> {
  const contacts:Contact[] = Array(number).fill(0).map(createFakeContact)
  const prevContacts = await readContacts()
  writeContacts([...prevContacts, ...contacts])
};

generateContacts(5);
