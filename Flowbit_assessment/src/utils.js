
import fs from 'fs';
export function loadDB() {
  return JSON.parse(fs.readFileSync('./src/db/memory.json'));
}
export function saveDB(db) {
  fs.writeFileSync('./src/db/memory.json', JSON.stringify(db, null, 2));
}
