import React from "react"

export default function DeleteConfirm(props){
    console.log(props)
    const  handleDeleteConfirm=()=> {
        props.setUser((userArray) => userArray.filter((e,index)=>index !== props.curruntUserIndex))
        props.isDelete(false)
    }
   
    return(
        <>
        <div className="modal-content">
          <div><span> Are You sure You want to Delete ?</span></div>
          <div><span><button onClick={handleDeleteConfirm}>Yes</button></span><span><button onClick={() => {props.isDelete(false)}}>No</button></span></div>
        </div>
        </>
    )
}