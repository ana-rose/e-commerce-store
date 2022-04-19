import firestore from "../firebase.js";
import myProducts from "./Products.js";

export const seedProducts = async () => {
    const collectionRef = firestore.collection("myProducts");
    const data = await collectionRef.get();
    if (!data.empty) {
        return;
    }
    const promises = myProducts.map(async (product) => {
        return await collectionRef.add(product);
    });

    const resolvedPromises = await Promise.all(promises);
};

export const getProducts = async () => {
    await seedProducts();

    const collectionRef = firestore.collection("myProducts");

    const queryData = await collectionRef.get();

    const documents = queryData.docs;

    const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
};
