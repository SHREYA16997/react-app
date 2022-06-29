import React, { useState } from "react";
import UserList from './user-list'

let formFields = [
  {
    label : "Name",
    key : "name"
  },
  {
    label : "Address",
    key : 'address'
  }
]

export default function Adduser(){
    const [formData , setFormData] = useState({})
    const [userList , setUserList] = useState([])
    const refs = React.useMemo(() => formFields.map((i) => React.createRef()), [])

    const handleChange = (value , key) => {
       setFormData({...formData , ...{[key]: value}})
    }

    const submitForm = (e) => {
        setUserList(oldArray => [...oldArray , formData])
        setFormData({})
        refs.forEach((e) => {
           e.current.value = null
        })
    }

    
  const isValid = () => {
        let inValid = false
        formFields.forEach(element => {
            if(formData[element.key] === undefined){
                inValid = true
            }
        })
        return inValid ? true : false
    } 

    return(
        <div>
          <div>
            <form className="form-horizontal">
                FILL THE BELOW FORM
                {
                    formFields.map((element,index) => {
                        return( <div key={index}>
                            {element.label}
                            <input 
                              value={formData[element.value]}
                              ref={refs[index]}
                              onChange ={(e) => {handleChange(e.target.value , element.key)}}  
                            />
                        </div>)
                    })
                }
                <button disabled={isValid()}  onClick={(e) => {e.preventDefault(); submitForm(e)}}>Submit</button>
            </form>
          </div>
          <div>
            {
                userList.length > 0 ?  <UserList users={userList} setUser={setUserList}/> : null
            }
          </div>
        </div>
    )
}

