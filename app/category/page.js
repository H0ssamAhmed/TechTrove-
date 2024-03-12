'use client'
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import React from 'react'
import ArticlePoster from '../_components/articlePoster'
const Page = () => {
    const getall = useQuery(api.article.get)
    const software = getall?.filter((cat) => cat.category == 'software')
    const react = getall?.filter((cat) => cat.category == 'react')
    const next = getall?.filter((cat) => cat.category == 'next')
    const js = getall?.filter((cat) => cat.category == 'js')

    return (
        <div className='container'>
            <h1 className=' py-4 pr-2 text-lg'>software</h1>
            <div className=' flex items-center justify-center gap-4 flex-wrap mb-5'>

                {software?.map((article, index) => {
                    return (<ArticlePoster article={article} key={index} />
                    )
                })
                }
            </div>

            <h1 className=' py-4 pr-2 text-lg'>React js</h1>
            <div className=' flex items-center justify-center gap-4 flex-wrap mb-5'>
                {react?.map((article, index) => {
                    return (<ArticlePoster article={article} key={index} />
                    )
                })
                }
            </div>

            <h1 className=' py-4 pr-2 text-lg'>Next js</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-5'>
                {next?.map((article, index) => {
                    return (<ArticlePoster article={article} key={index} />
                    )
                })
                }
            </div>

            <h1 className=' py-4 pr-2 text-lg'>Javascript</h1>
            <div className=' flex items-center justify-center gap-4 flex-wrap mb-5'>
                {js?.map((article, index) => {
                    return (<ArticlePoster article={article} key={index} />
                    )
                })
                }
            </div>



        </div>
    )
}

export default Page