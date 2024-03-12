"use client"
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import Skeleton from './category/_components/skeleton'
import ArticlePoster from './_components/articlePoster'

export default function Home() {
  const skeleton = [Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton, Skeleton]
  const getArticles = useQuery(api.article.get)

  return (
    <main className='container'>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

        {!getArticles &&
          skeleton.map((SkeletonElement, index) => {
            return <SkeletonElement key={index} />
          })

        }
        {getArticles?.map((article, index) => {
          return <ArticlePoster article={article} key={index} />
        })
        }

      </div>
    </main>
  )
}
