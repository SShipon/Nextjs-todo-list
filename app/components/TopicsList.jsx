import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from "react-icons/hi"
function TopicsList() {
  return (
    <div className='p-4 border border-slate-700 my-3 flex justify-between gap-5'>
        <div>
            <h2 className='text-2xl'>Topic Title</h2>
            <div>Topic Description</div>
        </div>
        <div className='flex gap-2'>
            <RemoveBtn />
            <Link href={'/editTopic/123'}></Link>
            <HiPencilAlt size={24} />
        </div>
    </div>
  )
}

export default TopicsList