"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { TfiWrite } from "react-icons/tfi";

const Navbar = () => {
  const { user } = useUser()
  return (
    <div className={`border-b-teal-500 border border-transparent mb-8  `}>
      <div className="p-4 bg-teadl-500 container flex-col md:flex-row flex items-center justify-between transition-all">
        <div className='flex flex-col'>
          <Link href='/' className='select-none rubik-mono font-bold bg-muted-foreground text-[40px]'>TechTrove</Link>
        </div>
        <div className=' flex gap-4 justify-center flex-wrap items-center'>
          <Link href='/category/all' className={`text-primary hover:bg-primary hover:text-white  bg-white transition border-white border  duration-500 px-1 rounded-sm`}>All</Link>
          <Link href='/category/software' className={`text-primary hover:bg-primary hover:text-white  bg-white transition border-white border  duration-500 px-1 rounded-sm`}>software</Link>
          <Link href='/category/javaScript' className={`text-primary hover:bg-primary hover:text-white  bg-white transition border-white border  duration-500 px-1 rounded-sm`}>JavaScript</Link>
          <Link href='/category/react' className={`text-primary hover:bg-primary hover:text-white  bg-white transition border-white border  duration-500 px-1 rounded-sm`}>ReactJS</Link>
          <Link href='/category/next' className={`text-primary hover:bg-primary   hover:text-white  bg-white transition border-white border  duration-500 px-1 rounded-sm`}>NextJS</Link>
          <div className='ml-8 flex gap-4 justify-center items-center'>

            {user && <>
              <Link href='/create' className='dtext-primary text-white transition flex items-center justify-center gap-4 hover:border-white border border-transparent duration-500 px-2 rounded-sm'>
                Write
                <TfiWrite />
              </Link>
              <UserButton afterSignOutUrl='/' />
            </>}
            {!user &&
              <>
                <Link href='/sign-in' className='text-white hover:text-primary hover:bg-white  bg-primary transition border-white border  duration-500 px-2 rounded-sm'>Sign in</Link>
                <Link href="/sign-up" className='text-primary hover:bg-primary hover:text-white  bg-white transition border-white border  duration-500 px-1 rounded-sm'>Sign up</Link>
              </>
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar