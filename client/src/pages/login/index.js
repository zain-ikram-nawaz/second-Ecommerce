// import { Axios } from 'axios'
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'




export default function Login() {
  
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const router = useRouter()

    
     const SubmitHandler = async(e)=>{
        e.preventDefault()
        const data = {
            email,
            password
        }
try {
    const res = await fetch('http://localhost:8000/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
        credentials:"include",
    })
    
if(!res.ok){
    const result = await res.json()
return  alert(result.message)
// return router.push("./login")
}      
else{
    const data2 = await res.json()
    alert(data2.message)
  return  router.push(data2.redirect)
}

} catch (error) {
    console.log(error)
}

    }
  return (
    <div className='flex h-96 w-full justify-center items-center mt-8 rounded-md sm:mt-40'>
        
        <main className='border-y-2 p-6 bg-[#ec6e55] rounded-lg'>

            <form onSubmit={SubmitHandler} className='border bg-white w-60 space-y-4 h-80 pt-6'>
                <h2 className='text-center md:text-3xl font-bold text-[#23403d]'>Login</h2>
                <input className="block w-full border-b-2 p-2" type="email" placeholder='Email'onChange={(e)=>{setEmail(e.target.value)}}/>
                <input className="block  border-b-2 w-full p-2" type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className="block w-full bg-[#23403d] text-white font-semibold p-2 rounded-md" type='submit' >Login</button>
            <Link href={"./signup"}> <p className='text-center'> Don't Have a Account</p></Link>
            </form>
        </main>

    </div>
  )
}
