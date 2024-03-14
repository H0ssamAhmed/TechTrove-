"use client"
import { api } from '@/convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import Skeleton from '../../_components/skeleton';
import { AiFillLike } from "react-icons/ai";
import { BiEdit, BiSolidDislike } from "react-icons/bi";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

const PageName = () => {
    const parms = useParams()
    const { user } = useUser()
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setisDisliked] = useState(false)
    const articleId = (parms.pageName.split('-id-')[1]);
    const getArticle = useQuery(api.article.getOneArticle, { id: articleId })
    const popularity = useMutation(api.article.popularity, { id: articleId })
    const unPopularity = useMutation(api.article.unPopularity, { id: articleId })

    const handlePopularity = (type) => {
        if (type === 'like' && !isLiked) {
            popularity({ id: articleId, likes: getArticle.likes })
            setIsLiked(true)
        }
        if (type === 'dislike' && !isDisliked) {
            unPopularity({ id: articleId, dislikes: getArticle.dislikes })
            setisDisliked(true)
        }
    }
    const quillModules = { toolbar: [] };
    return (
        <div className='container px-6'>
            {!getArticle &&
                <Skeleton className='h-[80vh]' />
            }
            {getArticle &&
                <div className=' flex justify-between  items-start gap-4 relative'>
                    <div className=' w-11/12  py-8'>
                        <h1 className=' text-[40px] my-4'>{getArticle.title}</h1>
                        <ReactQuill theme='bubble' value={getArticle?.content} modules={quillModules} readOnly />

                    </div>
                    <div className=' flex flex-col gap-8 text-2xl sticky w-1/12 top-24 right-5 '>
                        <p onClick={() => handlePopularity('like')} className='group cursor-pointer mx-auto w-fit text-center'>
                            <AiFillLike className={`text-3xl group-hover:text-teal-500 ${isLiked && 'text-teal-500'}`} />
                            <span className='mt-2 block'>
                                {getArticle?.likes}
                            </span>
                        </p>
                        <p onClick={() => handlePopularity('dislike')} className='group cursor-pointer mx-auto w-fit text-center'>
                            <BiSolidDislike className={`text-3xl group-hover:text-red-500`} />
                            <span className='mt-2 block'>
                                {getArticle?.dislikes}
                            </span>
                        </p>
                        {getArticle?.userId === user?.id &&
                            <Link href={`/edit/${getArticle._id}`} className='group cursor-pointer mx-auto w-fit text-center'>
                                <BiEdit className={`text-3xl group-hover:text-teal-500`} />
                            </Link>
                        }
                    </div>
                </div>
            }

        </div>
    )
}

export default PageName