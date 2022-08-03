import { MongoClient } from "mongodb";
export async function connectDatabase () {
    const client = await MongoClient.connect('mongodb+srv://nextJsuser:fOgYbERX2PmjXxLK@sdpproject.gxbk7.mongodb.net/?retryWrites=true&w=majority')

    return client
}