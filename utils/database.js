import mongoose from 'mongoose';

let isConnected = false; //track the connection status

export const connectToDB = async () => {
	mongoose.set('strictQuery');
};
