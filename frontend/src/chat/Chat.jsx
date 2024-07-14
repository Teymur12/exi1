import React from 'react'
import ChatHeader from "./ChatHeader"
import SendMessage from "./SendMessage"
import  Sidebar  from './Sidebar'

const chat = () => {
  return (
    <div>
        
    <div className='flex'>
        <div>
        <Sidebar/>
        </div>
        <div className='w-[100%] bg-zinc-50 flex flex-col gap-y-3'>
        <ChatHeader/>
        <SendMessage/>
        </div>
    </div>
    </div>
  )
}

export default chat