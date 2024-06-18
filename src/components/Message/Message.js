import React from 'react'

import './Message.css'

import ReactEmoji from 'react-emoji';

const Message = ({ message: {user,text},name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return(
        isSentByCurrentUser
        ? (
            <div className='messageContainer'>
                <p className='flex justify-center items-center text-sm text-gray-400 pr-2'>{trimmedName}</p>
                <div className=' bg-blue-500 p-2 rounded-2xl'>
                    <p className='messagetext colorWhite'>{ReactEmoji.emojify(text)}</p>
                </div>

            </div>
        )
        : (
            <div className='messageContainer justifyStart'>
                <p className='flex justify-center items-center text-sm text-gray-400 pr-10'>{trimmedName}</p>
                <div className='bg-gray-200 p-2 rounded-2xl'>
                    <p className='messagetext colorDark'>{ReactEmoji.emojify(text)}</p>
                </div>

            </div>
        )
    )
}

export default Message;