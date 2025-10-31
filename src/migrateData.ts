import db from './firebaseConfig';
import { tryoutPackages } from './data/tryoutPackages.ts';
import { doc, setDoc } from "firebase/firestore"; 

async function migrateData() {
  try {
    for (const pkg of tryoutPackages) {
      await setDoc(doc(db, "tryoutPackages", pkg.id), pkg);
      console.log(`Package ${pkg.id} migrated successfully`);
    }
  } catch (e) {
    console.error("Error migrating data: ", e);
  }
}

migrateData();
