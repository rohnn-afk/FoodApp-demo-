import foodModel from "./fooddata.js";

const Fooddata = {
    
    categoryname:"Pizza"
    , name:"Veg overloaded cheeze pizza"
    ,img:"https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    options:[{half:400,full:680}],
    description:"Made with soft dough, filled with extra cheeze and best sauces"
    
    }



export async function addFoodData(){

    const newFood= new foodModel(Fooddata)
    await newFood.save();

}