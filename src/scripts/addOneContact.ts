import { readContacts } from '../utils/readContacts.ts';

import { writeContacts } from '../utils/writeContacts.ts';
import { createFakeContact } from '../utils/createFakeContact.ts';

export const addOneContact = async () => {
  const allContacts = await readContacts()
  const contact = createFakeContact()
  writeContacts([...allContacts, contact])
  };

addOneContact(
)
