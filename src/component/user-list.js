import React from "react";

export default function UserList(props){  
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
     
    </tr>
  </thead>
  <tbody>
   {
     props.users.map((user, index) => {
      return(
     <tr key={index}>
        <td>{user.name}</td>
        <td>{user.address}</td>
     </tr>
      )
     })
   
   }
   
  </tbody>
</table>
        </div>
    )
} 