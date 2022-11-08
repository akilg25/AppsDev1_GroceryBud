import React, { useState } from 'react'
import groceries from './groceryList'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'rect-icons/ti'

function Grocery({groceries,completeGrocery}) {
    
    const [edit,setEdit] = useState({
        id:null,
        value:''
    })

  return groceries.map((grocery,index) => (
    <div className={grocery.isComplete ? 'grocery-row complete' : 'grocery-row'} key={index}>

        <div key={grocery.id} onClick={()=>completeGrocery(grocery.id)}>{grocery.text}
        </div>
        <div className='icons'>
         <RiCloseCircleLine/>
         <TiEdit/>
        </div>
    </div>
  ))
}

export default Grocery