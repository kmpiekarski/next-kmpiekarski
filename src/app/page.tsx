import Image from 'next/image'
import Link from 'next/link'
import { getAllWorks } from '@/lib/works-api'

export default async function Home() {
  const works = await getAllWorks()
  return (
    <main>
      {works.map((work: any) => (
        <div key={work.sys.id}>
          <Image
            alt="placeholder"
            className=""
            height="200"
            src={work.image.url}
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
