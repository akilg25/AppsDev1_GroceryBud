import React, { useState } from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Grocery({groceries,completeGrocery,removeGrocery}) {
    
    const [edit,setEdit] = useState({
        id:null,
        value:''
    })

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