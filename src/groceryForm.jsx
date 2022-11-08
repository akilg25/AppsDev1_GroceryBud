import React,{useState} from 'react';

function GroceryForm(props){
    const [inputs,setInputs] = useState('');

    const changeHandle = h => {
      setInputs(h.target.value);
    }

    const submitHandle  = h => {
       h.preventDefault();
       props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: inputs
       }); 
       
       setInputs('');
    };
    
    return(
        <form className="groceryForm" onSubmit={submitHandle}>
          <input type='text' placeholder='ex. Milk' value={inputs} name='text' className='grocery_input' onChange={changeHandle}/>
          <button className='submit_btn'>Submit</button>
        </form>
    );
}

export default GroceryForm;