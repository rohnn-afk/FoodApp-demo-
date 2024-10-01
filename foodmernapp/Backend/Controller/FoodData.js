
export async function foodData(req,res) {
    try {
        res.send([food_items,food_category])

    } catch (error) {
        console.error(error);
        res.send('couldnt fetch data');
    }
}