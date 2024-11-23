import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const writeContacts = (updatedContacts) =>
  writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
