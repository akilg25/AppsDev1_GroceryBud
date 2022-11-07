import {useState} from 'react';

function GroceryForm(){
    const [inputs,setInputs] = useState('');
    return(
        <form className="groceryForm">
          <input type="text" placeholder='ex. Milk' value={inputs} name='text' className='grocery_input'/>
          <button className='submit_btn'>Submit</button>
        </form>
    );
}

export default GroceryForm;