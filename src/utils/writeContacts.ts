import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';
import { Contact } from '../types/types.ts';

export const writeContacts = async (updatedContacts: Contact[]) => {
   writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2))
};
