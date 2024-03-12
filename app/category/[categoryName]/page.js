"use client"
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import { useParams } from 'next/navigation'
import React from 'react'
import Skeleton from '../_components/skeleton'
import ArticlePoster from '@/app/_components/articlePoster'
const Page = () => {
    const skeleton = [Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton]
    const { categoryName } = useParams()
    const articles = useQuery(api.article.getByCategory, { category: categoryName.toLocaleLowerCase() })

    return (
        <div className='container'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {!articles && skeleton.map((SkeletonElement, index) => <SkeletonElement key={index} />)}
                {articles?.map((article, index) => <ArticlePoster article={article} key={index} />)}
            </div>
        </div >
    )
}

export default Page