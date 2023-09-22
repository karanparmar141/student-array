import React,{useState} from 'react'

const B = () => {

let [students,setStudents]=useState([])
let [name,setName]=useState('')
let [cours,setCours]=useState('')

  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        <input type="text" onChange={(e)=>setCours(e.target.value)} value={cours}/>

        {
            
        }

    </div>
  )
}

export default B