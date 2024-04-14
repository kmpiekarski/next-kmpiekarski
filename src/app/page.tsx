import Image from 'next/image'
import Link from 'next/link'
import { getAllWorks } from '@/lib/works-api'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

interface Work {
  sys: { id: number }
  ageLimit: boolean
  date: number
  image: { url: string }
  link: string
  name: string
  role: string
  title: string
  type: string
}

export default async function Home() {
  const works = await getAllWorks()

  return (
    <main>
      {works.map((work: Work) => (
        <div key={work.sys.id}>
          {/* {work.image.url && (
            <Image
              alt="placeholder"
              className=""
              height="200"
              src={work.image.url}
              width="200"
            />
          )} */}
          <pre>
            <Link href={work.link}>{work.title}</Link>
          </pre>
          <pre>
            <Link href={work.link}>{work.name}</Link>
          </pre>

          <pre>{work.type}</pre>
          <pre>{work.link}</pre>
          <pre>{work.role}</pre>
          <pre>{work.date}</pre>
          {/* <pre>{work.category}</pre> */}
          <pre>{work.ageLimit}</pre>
        </div>
      ))}
    </main>
  )
}
