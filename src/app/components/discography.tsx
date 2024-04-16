import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { getAllWorks } from '@/lib/discography-api'

const discography = getAllWorks

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

export default function Discography() {
  // props.map((work: any) => {
  const items = discography.map(props: Work => 
    <Item key={props.sys.id}>
      <Image src={props.image.url} alt={props.alt} width={200} height={200} />
      <Link href={props.link}>
        <Name>{props.name}</Name>
        <List>
          <div>{props.type}</div>
          <div>
            <Title>{props.title}</Title>
            <Label>Year</Label>
            <Note>{props.date}</Note>
          </div>
          <div>
            <Label>Role</Label>
            <Note>{props.role}</Note>
          </div>
          <div>
            <Label>Year</Label>
            <Note>{props.year}</Note>
          </div>
        </List>
      </Link>
    </Item>
  )
  return ()
}

const Wrapper = styled.div`
  background-color: turquoise;
  padding: 5px;
`

const Name = styled.h4`
  font-size: 1.5rem;
`

const Title = styled.h5`
  font-size: 1.2rem;
`

const UnorderedList = styled.ul`
  line-height: 1rem:
`

const Item = styled.div`
  background-color: beige;
  padding: 5px;
`

const List = styled.dl`
  background-color: light-blue;
`

const Label = styled.dt`
  color: blue;
`
const Note = styled.dt`
  color: red;
`
