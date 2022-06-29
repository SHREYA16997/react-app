import React, { useState } from "react";
import DeleteConfirm from "./delete-comfirmation";
import _ from 'lodash'

export default function UserList(props){ 
  const [ userData , setUserData ] = useState(_.cloneDeep(props.users)) 
  const [ isDelete , setDelete ] = useState(false)
  const [curruntUser , setCurruntUser] = useState()
  const [searchString , setSearchString] = useState('')

  const handleDelete = (user) => {
    console.log(user)
     setCurruntUser(user)
     setDelete(true)
  }

  const searchHandler = (e) => {      
        const filterData = e.target.value !=='' ? props.users.filter((el)=> {
            if(e.target.value === '')
            { return el }else {
              return el.name.toLowerCase().includes(e.target.value.toLowerCase())
            }
          })

           : props.users
        setUserData(filterData)    
  }

    return(
        <div>
          <div><div><label>Search Name</label><input  onChange={searchHandler} /></div></div>
          {
            userData.length > 0 
             ?
             <table className="table">
             <thead>
               <tr>
                {
                  Object.keys(userData[0]).map((e , i) =>{
                    return(
                       <th scope="col"  key={i}>{e.toUpperCase()}</th>
                     )
                   })
                }
                 <th>Delete Item</th>
               </tr>
             </thead>
             <tbody>
              {
               userData.map((user, index) => {
                 return(
                   <tr key={index}>   
                   <td>{user.name}</td>
                   <td>{user.address}</td>
                   <td><span><button onClick={(e) => handleDelete(index)}>Delete</button></span></td>
               </tr>
              )
            })
          }
         </tbody>
      </table>
      :
      <div><span>No data Found</span></div>

          }
         
   {
    isDelete
    ?
    <DeleteConfirm isDelete={setDelete} setUser={props.setUser} curruntUserIndex={curruntUser}/>
    :
    null
   }
</div>
    )
} 