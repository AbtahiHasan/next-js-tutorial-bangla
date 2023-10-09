import getTodos from '@/utils/getTodos'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const todos = await getTodos()
  return (
    <main>
      {
        todos.map((todo) => {
          const { title, id } = todo
          return (
            <article key={id}>
              <Link href={`/${id}`}>{title}</Link>
            </article>
          )
        })
      }
    </main>
  )
}
