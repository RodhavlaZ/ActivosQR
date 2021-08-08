import { firestore } from "./firebase";

const getPrimaria = async () => {
    const snapshot = await firestore.collection("Primaria").get();
    snapshot.docs.forEach((doc) => console.log(doc.data()));
};

export { getPrimaria };