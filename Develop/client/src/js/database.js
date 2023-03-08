import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
// Accepts some content and add it to the database.
export const putDb = async (content) => {
  console.log("PUT to the database");
//create a connection to the database and version we want to use.
  const jateDb = await openDB("jate", 1);
// creates a new transaction and specify the databse and data privileges.
  const tx = jateDb.transaction("jate", "readwrite");

  // opens the desired object store.
  const store = tx.objectStore("jate");

  //use the .put() method to update data in the database.
  // text editor consists of one field of information that is repeatedly retrived and updated
  const request = store.put({ id: 1, value: content});

  const result = await request; //this gets confirmation of the request
  console.log("🚀 - data saved to the database", result);
};
  

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
