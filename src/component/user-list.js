import React, { useState } from "react";
import DeleteConfirm from "./delete-comfirmation";

export default function UserList(props){  
  const [ isDelete , setDelete ] = useState(false)
  const [curruntUser , setCurruntUser] = useState()

  const handleDelete = (user) => {
    console.log(user)
     setCurruntUser(user)
     setDelete(true)
  } 
  
    return(
        <div>
          <table className="table">
            <thead>
              <tr>
               {
                 Object.keys(props.users[0]).map((e , i) =>{
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
              props.users.map((user, index) => {
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