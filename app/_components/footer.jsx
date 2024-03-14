import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaCodepen, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
// import { Link } from 'react-router-dom'

// import Logo from '../assets/logo-white.png'
// importassets/logo-png'
const Footer = () => {
    return (
        <div className='mt-8 pt-4 border-t border-t-teal-500 bg-teal-500/5'>
            <div className='container   '>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-y-4'>
                    <div className=' mx-auto md:ml-0'>
                        <h4 className='text-[24px]'>
                            Site Links
                        </h4>
                        <div className='text-white flex flex-col gap-2 my-4 '>
                            <Link href='/category/all' className={`text-white transition hover:bg-teal-500 px-1 rounded-sm`}>All</Link>
                            <Link href='/category/software' className={`text-white transition hover:bg-teal-500 px-1 rounded-sm`}>software</Link>
                            <Link href='/category/javaScript' className={`text-white transition hover:bg-teal-500 px-1 rounded-sm`}>JavaScript</Link>
                            <Link href='/category/react' className={`text-white transition hover:bg-teal-500 px-1 rounded-sm`}>ReactJS</Link>
                            <Link href='/category/next' className={`text-white transition hover:bg-teal-500 px-1 rounded-sm`}>NextJS</Link>

                            {/* <Link to='/articles' className='hover:text-primary transition'>Article</Link> */}
                        </div>
                    </div>
                    <div className=' mx-auto md:ml-0'>
                        <h4 className='text-[24px]'>
                            Find me online
                        </h4>
                        <div className='text-white grid grid-cols-3 transition text-[26px] gap-4 my-4'>
                            <a rel="noreferrer" href='https://www.linkedin.com/in/hossam-ahmed-/' target='_blank' className='hover:text-primary' ><FaLinkedin /></a>
                            <a rel="noreferrer" href='https://github.com/H0ssamAhmed' target='_blank' className='hover:text-primary' ><FaGithub /></a>
                            <a rel="noreferrer" href='https://twitter.com/hossamofficia1' target='_blank' className='hover:text-primary' ><FaXTwitter /></a>
                            <a rel="noreferrer" href='https://codepen.io/_hossam-ahmed-' target='_blank' className='hover:text-primary' ><FaCodepen /></a>
                            <a rel="noreferrer" href='https://www.facebook.com/profile.php?id=100008367248132' target='_blank' className='hover:text-primary' ><FaFacebookSquare /></a>
                            <a rel="noreferrer" href='https://www.instagram.com/hossam1__ahmedd/' target='_blank' className='hover:text-primary' ><FaInstagram /></a>
                        </div>
                    </div>

                    <div className=' mx-auto md:ml-0'>
                        <h4 className='text-[24px]'>
                            Latest Articles
                        </h4>
                        <div className='text-white flex flex-wrap gap-2 my-4'>
                            <Link href='/category/all' className={`text-primary hover:bg-primary hover:text-white  bg-white transition border-white border  duration-500 px-1 rounded-sm`}>All</Link>
                            <Link href='/category/software' className={`text-primary hover:bg-primary hover:text-white  bg-white transition border-white border  duration-500 px-1 rounded-sm`}>software</Link>
                            <Link href='/category/javaScript' className={`text-primary hover:bg-primary hover:text-white  bg-white transition border-white border  duration-500 px-1 rounded-sm`}>JavaScript</Link>
                            <Link href='/category/react' className={`text-primary hover:bg-primary hover:text-white  bg-white transition border-white border  duration-500 px-1 rounded-sm`}>ReactJS</Link>
                            <Link href='/category/next' className={`text-primary hover:bg-primary   hover:text-white  bg-white transition border-white border  duration-500 px-1 rounded-sm`}>NextJS</Link>
                        </div>
                    </div>
                </div>
                <div className=' text-center text-gray-200 py-4' >
                    <p>&copy;2023 -  {new Date().getFullYear()} Hossam. Ahmed, All rights reserved.</p>
                    <p className='py-1'> <strong>About this website:</strong> built with Nextjs, Tailwind CSS, and Vercel hosting.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
