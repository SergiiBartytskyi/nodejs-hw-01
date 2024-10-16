import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const writeContacts = async (updatedContacts) => {
  const results = await writeFile(PATH_DB, JSON.stringify(updatedContacts));
  return results;
};
