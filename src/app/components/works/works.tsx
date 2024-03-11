'use client'

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'
// import Image from "next/image"

export default function ListWorks(works) {
  console.log(works)
  const listItems = works.map((work: any) => {
    <Item>
      {/* <Image src={work.image} alt={work.alt} wiLabelh={250} height={250} /> */}
      <Link href={works.src}>
        <Name>{work.name}</Name>
        <List>
          <div>
            <Title>{work.title}</Title>
            <Label>Year</Label>
            <Note>{work.date}</Note>
          </div>
          <div>
            <Label>Role</Label>
            <Note>{work.role}</Note>
          </div>
          <div>
            <Label>Year</Label>
            <Note>{work.year}</Note>
          </div>
        </List>
      </Link>
    </Item>
  })

  return <UnorderedList>{listItems}</UnorderedList>
}

ListWorks.propTypes = {
  works: PropTypes.array.isRequired,
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
