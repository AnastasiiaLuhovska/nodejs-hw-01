import { readContacts } from '../utils/readContacts.ts';

export const countContacts = async ():Promise<number> => {
    const allContacts = await readContacts()
    return allContacts.length
};

console.log(await countContacts());
