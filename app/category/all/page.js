"use client"
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import React from 'react'
import Skeleton from '../_components/skeleton'
import ArticlePoster from '@/app/_components/articlePoster'

const TestPage = () => {
    const skeleton = [Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton]
    const articles = useQuery(api.article.get)
    return (

        <div className='container'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {!articles &&
                    skeleton.map((SkeletonElement, index) => {
                        return <SkeletonElement key={index} />
                    })

                }
                {articles?.map((article, index) => {
                    return <ArticlePoster key={index} article={article} />

                })
                }

            </div>
        </div >
    )
}

export default TestPage