
import { writeContacts } from '../utils/writeContacts.ts';

export const removeAllContacts = async () => {
  writeContacts([])
};

removeAllContacts();
