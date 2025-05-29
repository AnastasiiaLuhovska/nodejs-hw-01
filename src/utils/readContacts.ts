import { PATH_DB } from '../constants/contacts.ts';
import * as fs from 'node:fs/promises';
import { Contact } from '../types/types.ts';

export const readContacts = async ():Promise<Contact[]> => {
  const data = await fs.readFile(PATH_DB, 'utf-8')
  return JSON.parse(data)
};

readContacts()
