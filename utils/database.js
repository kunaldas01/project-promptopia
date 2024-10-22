import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		console.log("Mongodb is already Connected");
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			dbName: "share_prompt",
		});

		isConnected = true;

		console.log("MongoDB connection established");
	} catch (error) {
		console.log(error);
	}
};
