import mongoose from "mongoose";

export const dbConnection = ()=> {
    mongoose.connect("mongodb+srv://shafi:VvEWbCotBMi7deiS@cluster0.c5ltk8u.mongodb.net/?retryWrites=true", {
        dbName: "RESTAURANT"
    }).then(()=> {
        console.log("Connected to database successfully")
    })
    .catch((err) => {
        console.log(`Some error occured while connecting to database ${err}`)
    })
}