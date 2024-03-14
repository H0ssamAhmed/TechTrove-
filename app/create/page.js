"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useRouter } from 'next/navigation';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';


const Create = () => {
    const [loading, setLoading] = useState(false)
    const create = useMutation(api.article.create)
    const router = useRouter()
    const { user } = useUser()
    const quillModules = {
        toolbar: [
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'header': 3 }, { 'header': 4 }],
            ['bold', 'italic', 'underline'],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ],
    };
    const [form, setForm] = useState({
        title: '',
        category: '',
        author: '',
        content: ``,
        createAt: '',
        hashtags: '',
        userId: user?.id,
        likes: 0,
        dislikes: 0,
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value, createAt: new Date().toLocaleString('en', { day: '2-digit', month: 'long', year: "numeric", hour: 'numeric', minute: '2-digit' }) });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        create(form);
        setLoading(false)
        router.push('/')

    }

    return (
        <div className='pb-32'>
            <h1 className='text-[30px] my-4 italic text-center'>Write a new Article</h1>
            <div className='md:px-40 rounded-xlg  '>

                <div className='flex items-center justify-between flex-col md:flex-row gap-4'>
                    <div className='flex flex-col items-start my-2 w-full md:w-1/2'>
                        <label className='py-2 pl-4' htmlFor='title'>Title</label>
                        <input onChange={handleChange} value={form.title} name="title" className='bg-primary border focus:bg-gray-700 pl-4 py-2 outline-none rounded-sm w-full' id='title' required placeholder='Article title' />
                    </div>
                    <div className='flex flex-col items-start w-full md:w-1/2'>
                        <label className='py-2 pl-4' htmlFor='category'>Category</label>
                        <select value={form.category} onChange={handleChange} name="category" className='bg-primary border focus:bg-gray-700 pl-4 py-2 outline-none rounded-sm w-full'>
                            <option value=''>select category</option>
                            <option value='react'>React.js</option>
                            <option value='next'>Next.js</option>
                            <option value='javascript'>JavaScript</option>
                            <option value='software'>Software</option>
                        </select>
                    </div>
                </div>
                <div className='flex items-center justify-between flex-col md:flex-row gap-4'>
                    <div className='flex flex-col items-start w-full md:w-1/2'>
                        <label className='py-2 pl-4' htmlFor='author'>Author</label>
                        <input onChange={handleChange} value={form.author} name="author" className='bg-primary border focus:bg-gray-700 pl-4 py-2 outline-none rounded-sm w-full' id='author' required placeholder='Article author' />
                    </div>
                    <div className='flex flex-col items-start my-2 w-full md:w-1/2'>
                        <label className='py-2 pl-4' htmlFor='hashtags'># Hashtags</label>
                        <input onChange={handleChange} value={form.hashtags} name="hashtags" className='bg-primary border focus:bg-gray-700 pl-4 py-2 outline-none rounded-sm w-full' id='hashtags' placeholder='example: react frontend js ' />
                    </div>
                </div>
                <div className='rounded-tr-md mt-4 rounded-tl-md'>
                    <label className='py-2 pl-4' >Content</label>
                    <ReactQuill
                        value={form.content}
                        className='text-primary w-full bg-white/90' placeholder='Start write' theme='snow'
                        onChange={(e) => { setForm({ ...form, content: e }) }} modules={quillModules} />

                </div>

                <button onClick={handleSubmit} type='submit' className={`${!loading ? 'block' : 'hidden'} hover:text-white text-primary bg-white  hover:bg-primary transition   border   w-full mt-2 p-2 rounded-sm `}>submit</button>

                <button disabled={loading} type='submit' className={`${loading ? 'block border-white/50' : 'hidden'} text-primary  bg-white/50 cursor-not-allowed   border   w-full mt-2 p-2 rounded-sm`}>submiting...</button>

            </div>

        </div>
    )
}

export default Create;
// "use client"
// import { api } from '@/convex/_generated/api';
// import { useUser } from '@clerk/nextjs';
// import { useMutation } from 'convex/react';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// const Create = () => {
//     const [loading, setLoading] = useState(false)
//     const create = useMutation(api.article.create)
//     const router = useRouter()
//     const { user } = useUser()
//     useEffect(() => {
//         setForm({
//             ...form,
//             userId: user?.id
//         })
//     }, [user])
//     const [form, setForm] = useState({
//         title: '',
//         category: '',
//         author: '',
//         content: '',
//         createAt: '',
//         hashtags: '',
//         userId: user?.id,
//         likes: 0,
//         dislikes: 0,
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setForm({ ...form, [name]: value, createAt: new Date().toLocaleString('en', { day: '2-digit', month: 'long', year: "numeric", hour: 'numeric', minute: '2-digit' }) });
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setLoading(true)
//         create(form);
//         setLoading(false)
//         router.push('/')

//     }

//     return (
//         <div onSubmit={handleSubmit} className='container'>
//             <form className='text-center mx-auto w-full md:w-[80%]'>
//                 <h1 className='text-[30px] italic'>Create a new Article</h1>
//                 <div className='flex items-center justify-between flex-col md:flex-row gap-4'>
//                     <div className='flex flex-col items-start my-2 w-full md:w-1/2'>
//                         <label className='py-2 pl-4' htmlFor='title'>Title</label>
//                         <input onChange={handleChange} value={form.title} name="title" className='bg-primary border focus:bg-gray-700 pl-4 py-2 outline-none rounded-sm w-full' id='title' required placeholder='Article title' />
//                     </div>
//                     <div className='flex flex-col items-start w-full md:w-1/2'>
//                         <label className='py-2 pl-4' htmlFor='category'>Category</label>
//                         <select value={form.category} onChange={handleChange} name="category" className='bg-primary border focus:bg-gray-700 pl-4 py-2 outline-none rounded-sm w-full'>
//                             <option value=''>select category</option>
//                             <option value='react'>React.js</option>
//                             <option value='next'>Next.js</option>
//                             <option value='javascript'>JavaScript</option>
//                             <option value='software'>Software</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className='flex items-center justify-between flex-col md:flex-row gap-4'>
//                     <div className='flex flex-col items-start w-full md:w-1/2'>
//                         <label className='py-2 pl-4' htmlFor='author'>Author</label>
//                         <input onChange={handleChange} value={form.author} name="author" className='bg-primary border focus:bg-gray-700 pl-4 py-2 outline-none rounded-sm w-full' id='author' required placeholder='Article author' />
//                     </div>
//                     <div className='flex flex-col items-start my-2 w-full md:w-1/2'>
//                         <label className='py-2 pl-4' htmlFor='hashtags'># Hashtags</label>
//                         <input onChange={handleChange} value={form.hashtags} name="hashtags" className='bg-primary border focus:bg-gray-700 pl-4 py-2 outline-none rounded-sm w-full' id='hashtags' placeholder='example: react frontend js ' />
//                     </div>
//                 </div>
//                 <div className='flex flex-col items-start my-2 w-full'>
//                     <label className='py-2 pl-4' htmlFor='content'>Content</label>
//                     <textarea onChange={handleChange} value={form.content} name="content" id='content' className='bg-primary border focus:bg-gray-700 pl-4 py-2 outline-none rounded-sm w-full min-h-[200px]' placeholder='Write article' />
//                 </div>

//                 <button type='submit' className={`${!loading ? 'block' : 'hidden'} hover:text-white text-primary bg-white  hover:bg-primary transition   border   w-full mt-2 p-2 rounded-sm `}>submit</button>

//                 <button disabled={loading} type='submit' className={`${loading ? 'block border-white/50' : 'hidden'} text-primary  bg-white/50 cursor-not-allowed   border   w-full mt-2 p-2 rounded-sm`}>submiting...</button>

//             </form>
//         </div>
//     )
// }

// export default Create;
