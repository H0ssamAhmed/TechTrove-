import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
    return (
        <div className='flex items-center justify-center h-[90vh] container'>
            <div className=' flex  flex-col items-center justify-center gap-4'>
                <p className="text-xl font-bold text-center w-1/2">
                    <q>
                        Welcome aboard! Embark on your journey of exploration and innovation with us. Let&apos;s learn and grow together!
                    </q>
                </p>
                <SignUp />
            </div>
        </div>
    )
}

export default SignUpPage