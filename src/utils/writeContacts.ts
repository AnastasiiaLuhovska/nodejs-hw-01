import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.ts';
import { writeFile } from 'node:fs/promises';
import { Contact } from '../types/types.ts';

export const writeContacts = async (updatedContacts: Contact[]) => {
  const prevContacts = await readContacts()
  await writeFile(PATH_DB, JSON.stringify([...prevContacts, ...updatedContacts], null, 2))
};
