import Image from 'next/image'
import Link from 'next/link'
import { gql } from '@apollo/client'

const query = gql`
  query Now {
    now(id: "1")
  }
`

export default async function Page() {
  return <main></main>
}
