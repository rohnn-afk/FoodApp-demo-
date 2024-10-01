import mongoose from "mongoose";

const dblink = "mongodb+srv://rohansharmadutt876:Nnu6xp5I2Ug5EwE8@cluster0.dmaxr.mongodb.net/foodapp?retryWrites=true&w=majority"


async function dbconnect() {


    await mongoose.connect(dblink)
        .then(async () => {
            console.log('database connected');
            
            const fetch_data = await mongoose.connection.db.collection("fooddatas");
            const data = await fetch_data.find({}).toArray()
            global.food_items = data;

            const fetch_category = await mongoose.connection.db.collection('foodcategories');
            const category = await fetch_category.find({}).toArray()
            global.food_category = category;
            // console.log(food_items);
        })

        .catch((err) => {
            console.log('error:server not working', err)
        })

}


export default dbconnect
