import Link from 'next/link';
import React from 'react'
import { FaEdit } from "react-icons/fa";

const EditPageById = () => {
    return (
        <div className=' w-full h-full flex items-center justify-center'>
            <div className=' flex items-center justify-center flex-col gap-4 min-h-[300px]'>
                <div className=' flex flex-wrap items-center justify-center'>
                    <FaEdit className='text-white/50' size={100} />
                </div>
                <h1 className=' text-[30px]'> Edit Page Coming Soon!</h1>
                <p>We are working on it and will be launching soon. Stay tuned!</p>

                <Link href='/' className='  bg-white text-primary border-transparent hover:bg-primary  hover:text-white hover:border-white border transition-all py-1 px-3 rounded'>Home</Link>
            </div>
        </div>
    )
}

export default EditPageById