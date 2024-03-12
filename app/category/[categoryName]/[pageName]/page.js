"use client"
import { api } from '@/convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import Skeleton from '../../_components/skeleton';
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";

const PageName = () => {
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setisDisliked] = useState(false)
    const parms = useParams()
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
    return (
        <div className='container px-6'>
            {!getArticle &&
                <Skeleton className='h-[80vh]' />
            }

            {getArticle &&
                <div className=' flex justify-between  items-start gap-4 relative'>
                    <div className='  py-8'>
                        <h1 className='my-5 text-5xl'>{getArticle.title}</h1>
                        <p className=' text-gray-400 my-3'>Wirrten by: <span className=' italic underline'>{getArticle.author}</span></p>
                        {/* <p className=' leading-loose'>{getArticle.content}</p> */}
                        <div>
                            {getArticle?.content?.split(',').map((p, index) => {
                                return <>
                                    <p key={index}>{p}.</p> <br /></>
                            })}
                        </div>
                        <div className='mt-8 flex flex-col justify-center  md:justify-start md:items-start items-center'>
                            <h4 className=' mt-4 mb-2'>Tags</h4>
                            <div className=' flex justify-center items-center gap-4'>
                                {getArticle?.hashtags.split(' ')?.map((tag, index) => {
                                    return <span key={index} className='p-1 rounded-sm bg-white hover:bg-teal-500 hover:text-white border-none text-primary  cursor-pointer select-none  transition'>#{tag}</span>
                                })}
                            </div>

                        </div>
                    </div>
                    <div className=' flex flex-col gap-8 text-2xl sticky top-24 right-5 w-1/2'>
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
                    </div>
                </div>
            }

        </div>
    )
}

export default PageName