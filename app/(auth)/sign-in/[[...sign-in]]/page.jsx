import { SignIn } from '@clerk/nextjs'
import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
    return (
        <div className='flex items-center justify-center h-[90vh] container'>
            <div className=' flex  flex-col items-center justify-center gap-4'>
                <p className="text-xl font-bold text-center w-1/2">
                    <q>Welcome back! Experience the journey of endless learning and discovery once again.</q>
                </p>
                <SignIn />

            </div>
        </div>
    )
}

export default SignInPage