The solution is to always check the `snapshot.exists` property before accessing any data from the snapshot. This ensures that you are only trying to access properties that actually exist, preventing errors.

```javascript
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();
const docRef = doc(db, "collection", "documentId");

getDoc(docRef).then((doc) => {
  if (doc.exists()) {
    console.log("Document data:", doc.data());
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
```