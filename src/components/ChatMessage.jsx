import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex gap-2 items-center mb-2 w-[95%] border '>
        <img src='https://yt4.ggpht.com/ytc/AIdro_nIMtE90llbvHU35x0Jrb8B9x_pnkQ5-LQIbA=s32-c-k-c0x00ffffff-no-rj'/>
        <span className='text-black text-sm'>{name}</span>
        <span className='text-gray-800 text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage