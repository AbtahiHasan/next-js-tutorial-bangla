
import getBlogs from '@/utils/getBlogs'
import Image from 'next/image'

export default async function Home() {
  const blogs = await getBlogs()
  return (
    <main className='grid grid-cols-3 gap-5 p-10'>
      {
        blogs.map(blog => {
          return (
            <article className='border p-2 rounded'>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </article>
          )
        })
      }

    </main>
  )
}
