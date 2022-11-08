import { useState } from "react";
import GroceryForm from "./groceryForm";
import Grocery from "./grocery";


function GroceryList(){

    const [groceries,setGroceries] = useState([]);

    const addGrocery = grocery => {
        if(!grocery.text || /^\s*$/.test(grocery.text)){
            return;
        }

        const newGrocery = [grocery,...groceries];

        setGroceries(newGrocery);
    };

    const completeGrocery = id => {
        let updatedGrocery = groceries.map(grocery => {
            if(grocery.id === id ){
                grocery.isComplete = !grocery.isComplete;
            }
            return grocery;
        });
        setGroceries(updatedGrocery);
    }

    return(
        <div>
          <h1>Grocery Bud</h1>
          <GroceryForm onSubmit={addGrocery}/>
          <Grocery 
          groceries = {groceries}
          completeGrocery = {completeGrocery}/>
        </div>
    );
}

export default GroceryList;