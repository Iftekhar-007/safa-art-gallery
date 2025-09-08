// // lib/dbConnect.js
// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.MONGODB_URI;

// let client;
// let clientPromise;

// if (!clientPromise) {
//   client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });

//   clientPromise = client.connect();
// }

// export default async function dbConnect(collectionName) {
//   const connectedClient = await clientPromise;
//   return connectedClient
//     .db(process.env.DB_USER_NAME)
//     .collection(collectionName);
// }

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!clientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  clientPromise = client.connect();
}

const dbConnect = async (collectionName) => {
  const client = await clientPromise;

  const db = client.db(process.env.DB_USER_NAME);
  return db.collection(collectionName);
};

export default dbConnect;
