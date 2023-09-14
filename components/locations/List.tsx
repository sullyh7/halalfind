import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'

interface LisCardProps {
    name: string,
    description: string,
    address: string,
    tags: string[],
}

const ListCard = ({name, description, tags, address}: LisCardProps) => (
    <Card>
  <CardHeader>
    <CardTitle>{name}</CardTitle>
    <CardDescription>
        {description}<br/>
        {address}
        </CardDescription>
  </CardHeader>
  <CardContent className=''>
    <ul className='flex justify-start flex-wrap sm:gap-x-5 gap-x-2'>
    {tags.map((tag, i) => <li className='border-2 py-1 px-2 rounded-lg' key={i}>{tag}</li>)}
    </ul>
  </CardContent>
  <CardFooter>
    Click for reviews
  </CardFooter>
</Card>
)

const List = () => {
  return (
    <ul className='w-full flex flex-col gap-y-10'>
        <li>
            <Link href={""}>
                <ListCard name={'Test 1'} 
                description={'Test descrition'}
                address={"15 Buckingham Palace"}
                tags={["tag1", "tag2", "tag3", "tag4"]} />
            </Link>
        </li>
        <li>
            <Link href={""}>
                <ListCard name={'Test 1'} 
                description={'Test descrition'}
                address={"15 Buckingham Palace"}
                tags={["tag1", "tag2", "tag3", "tag4"]} />
            </Link>
        </li>
        <li>
            <Link href={""}>
                <ListCard name={'Test 1'} 
                description={'Test descrition'}
                address={"15 Buckingham Palace"}
                tags={["tag1", "tag2", "tag3", "tag4"]} />
            </Link>
        </li>
        <li>
            <Link href={""}>
                <ListCard name={'Test 1'} 
                description={'Test descrition'}
                address={"15 Buckingham Palace"}
                tags={["tag1", "tag2", "tag3", "tag4"]} />
            </Link>
        </li>
    </ul>
  )
}

export default List