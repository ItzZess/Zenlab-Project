import mongoose from "mongoose";

const connection = {
  isConnected: 0,
};

async function connect() {
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(
    "mongodb+srv://zenlab:adminzen@zenlab.k9hhcdy.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("new connection");
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = 0;
    } else {
      console.log("not disconnected");
    }
  }
}
function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  return doc;
}

const Database = { connect, disconnect, convertDocToObj };
export default Database;
