import { readContacts } from '../utils/readContacts.ts';
import { writeContacts } from '../utils/writeContacts.ts';

export const removeLastContact = async () => {
  const allContacts = await readContacts()
  const filtered = allContacts.filter((_, index, array) => index !== array.length - 1 )
  writeContacts(filtered)
};

removeLastContact();
