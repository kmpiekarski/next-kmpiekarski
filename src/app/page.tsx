import Image from 'next/image'
import Link from 'next/link'
import { getAllWorks } from '@/lib/works-api'

interface Work {
  link: string
  title: string
  name: string
  type: string
  date: DateFormat
  category: string
  image: { url: string }
  sys: { id: number }
  ageLimit: boolean
  role: string
}

type DateFormat = 'MM-DD-YYYY' | 'YYYY-MM-DD' | 'ISO 8601'

export default async function Home() {
  const works = await getAllWorks()
  return (
    <main>
      {works.map((work: Work) => (
        <div key={work.sys.id}>
          <Image
            alt="placeholder"
            className=""
            height="200"
            src={work.image?.url || '/placeholder-square.png'}
            width="200"
          />
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
          <pre>{work.category}</pre>
          <pre>{work.ageLimit}</pre>
        </div>
      ))}
    </main>
  )
}
