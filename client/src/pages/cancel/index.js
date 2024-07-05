import React from 'react'
import Link from 'next/link'

export default function Success() {
  return (
    <main className='flex justify-center items-center h-[50vh] flex-col'>

    <div className='w-[20vw] h-[20vh] bg-gray-100 rounded-xl flex justify-center items-center font-bold text-red-800 text-[3vw]'>
cancel

    </div>
<Link href={"/cartdata"}> <p className='text-blue-600'>Go to back</p></Link>
    </main>
  )
}