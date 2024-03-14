import Link from 'next/link'
import React from 'react'

const ArticlePoster = ({ article }) => {

    return (
        <div className='group border border-white hover:bg-white hover:text-primary hover:border-primary transition-all  w-full p-4 rounded-sm'>
            <Link href={`/category/${article.category}/${article.title.split(' ').join('-')}-id-${article._id}`}>
                <h1 className='text-2xl py-4 font-semibold'>{article.title}</h1>
                {/* <p className=' line-clamp-3 text-gray-500'>{article.content}</p> */}
                <p className=' bg-gray-700 py-1 px-2 rounded-md w-fit my-5 text-white'>{article.category.toUpperCase()}</p>
                <div className=' my-4 flex flex-wrap gap-4'>
                    {article?.hashtags?.split(' ')?.map((hash, index) => {
                        return <h1 key={index} className=' group-hover:text-white text-white line-clamp-1 bg-teal-500 rounded-sm px-1'>#{hash}</h1>
                    })}
                </div>
                <button className='px-2 py-1 transition-all hover:bg-primary hover:text-white bg-white rounded-md text-primary border-primary border'>Read More</button>

            </Link>
        </div>
    )
}

export default ArticlePoster