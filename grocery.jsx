import React, { useState } from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import GroceryForm from './groceryForm'

function Grocery({groceries,completeGrocery,removeGrocery,updateGrocery}) {
    
    const [edit,setEdit] = useState({
        id:null,
        value:''
    })

    const submitUpdate = v => {
      updateGrocery(edit.id,v)
      setEdit({
        id:null,
        value: ''
      })
    }

    if(edit.id){
      return <GroceryForm edit={edit} onSubmit = {submitUpdate}/>
    }

  return groceries.map((grocery,index) => (
    <div className={grocery.isComplete ? 'grocery-row complete' : 'grocery-row'} key={index}>

        <div key={grocery.id} onClick={()=>completeGrocery(grocery.id)}>{grocery.text}
        </div>
        <div className='icons'>
         <RiCloseCircleLine onClick={() => removeGrocery(grocery.id)} className='delete-icon'/>
         <TiEdit onClick={() => setEdit({id: grocery.id,value: grocery.text})} className='edit-icon'/>
        </div>
    </div>
  ))
}

export default Grocery