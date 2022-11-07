import { useState } from "react";
import GroceryForm from "./groceryForm";


function GroceryList(){

    const [groceries,setGroceries] = useState([]);

    const addGrocery = grocery => {
        if(!grocery.text || /^\s*$/.test(grocery.text)){
            return;
        }

        const newGrocery = [grocery,...groceries];

        setGroceries(newGrocery);
    };

    return(
        <div>
          <h1>Grocery Bud</h1>
          <GroceryForm />
        </div>
    );
}

export default GroceryList;