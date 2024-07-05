import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function SignUp() {
    const router = useRouter()
    const[firstname,setFirstname]= useState()
    const[lastname,setLastname]= useState()
    const[phonenumber,setphonenumber]= useState()
    const[email,setEmail]= useState()
    const[password,setPassword]= useState()
    const[confirmpassword,setConfirmpassword]= useState()
    const[gender,setGender]= useState()
    const [error,setError]= useState("")

    
    const SubmitHandler =async(e)=>{
        e.preventDefault()
let data = {
    firstname,
    lastname,
    phonenumber,
    email,
    password,
    gender,
        }
        if(password !== confirmpassword){
            return  setError("Password not matach")
           }
           else{
       setError("")
           }
     
        const res = await fetch("http://localhost:8000/signup",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(data),
        })
        if(res.ok){
           const message = await res.json()
           setError(message.message)
           router.push("/login")
      
        }
        else{
          const error = await res.json()
          setError(error.error)
        }
     e.target.reset()
    }
    const Gender=(e)=>{
setGender(e.target.value)
    }

   
  return (
   <div className=' flex justify-center items-center '>
    <main className='mt-10 border-2 bg-[#ec6e55] p-6 w-96 rounded-lg'>
        <form onSubmit={SubmitHandler} className='bg-white signup space-y-4 border-2 rounded-lg pb-10'>
           <h2  className='text-center md:text-3xl sm:text-base font-bold text-[#23403d]'>Signup</h2>

<input className='w-full p-2 border-b-2' type="text" placeholder=' First Name' onChange={(e)=>{setFirstname(e.target.value)}}/>


<input className='w-full p-2 border-b-2' type="text" placeholder=' Last Name' onChange={(e)=>{
    setLastname(e.target.value)
}}/>


<input className='w-full p-2 border-b-2' type="number" placeholder=' Phone Number' onChange={(e)=>{setphonenumber(e.target.value)}}/>


<input className='w-full p-2 border-b-2' type="email" placeholder='Email Address' onChange={(e)=>{setEmail(e.target.value)}}/>


<div>
    <h1>Gender</h1>
<label>Male:
<input type="radio" value="male" className='radio '  name="gender" id="male" onChange={Gender}/>
</label>
<label>Femael:
<input type="radio" value="female" className='radio ' name="gender" id="female" onChange={Gender}/>
</label>
<label>Others:
<input type="radio" value="others" className='radio' name="gender" id="others" onChange={Gender}/>
</label>
</div>

<input className='w-full p-2 border-b-2' type="password" placeholder='Password'onChange={(e)=>{setPassword(e.target.value)}}/>

<p className='text-red-600'>{error}</p>

<input className='w-full p-2 border-b-2' type="password" placeholder='Confirm Password' onChange={(e)=>{setConfirmpassword(e.target.value)}}/>

        <button className="block w-full bg-[#23403d] text-white font-semibold p-2 rounded-md"  type='submit'>Submit</button>
        <Link href={"./login"}> <p className='text-center'> I Have a Account</p></Link>
        </form>
    </main>
    <div><h2 className='text-6xl w-full text-red-900'>{error}</h2></div>
   </div>
  )
}
