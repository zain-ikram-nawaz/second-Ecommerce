import React,{useEffect} from 'react'

export default  function  Service() {
 
 const serviceback = async ()=>{
    try {
        const res = await fetch("http://localhost:8000/service",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              credentials:"include",
        })
        if(res.ok){
    const userData = await res.json()
    console.log(userData.message)
        }
      } catch (error) {
        console.log(error)
      }
       
 }
   useEffect(()=>{
    serviceback()
   })
  return (
    <div>Service</div>
  )
}
