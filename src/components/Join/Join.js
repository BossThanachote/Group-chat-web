import React , {useState} from 'react'
import { Link } from 'react-router-dom'

import './Join.css';

export const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

  return (
    <>
    <div className="flex flex-row justify-center items-center h-screen bg-slate-100">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:h-[48rem] md:w-[48rem] sm:h-[30rem] sm:w-[32rem] ml-10 flex flex-col hidden shadow-2xl sm:block cursor-default">
        <div className="h-[5rem] w-full mt-[2.5rem] ml-[2.5rem] p-[1rem] flex flex-row items-center">
          <svg className="mr-1"
            width="24px" height="24px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12C20 16.4183 16.4183 20 12 20C10.5937 20 9.27223 19.6372 8.12398 19C7.53267 18.6719 4.48731 20.4615 3.99998 20C3.44096 19.4706 5.4583 16.6708 5.07024 16C4.38956 14.8233 3.99999 13.4571 3.99999 12C3.99999 7.58172 7.58171 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#000000" stroke-linejoin="round"/>
          </svg>
          <span className="text-white text-[1rem]">
            แชทกันเถอะ 
          </span>
        </div>
        <div className="w-full md:mt-[10rem] sm:mt-[5rem] flex flex-col">
          <div className="text-white text-center text-[1.2rem]">
            Nice to see you again
          </div>
          <div className="text-white text-center text-[2.5rem]">
            ยินดีต้อนรับ !
          </div>
          <div className="flex justify-center">
            <div className="bg-white h-[0.5rem] w-[2.5rem] mt-[0.5rem] rounded-lg">

            </div>
          </div>
          <div className="text-white text-center md:text-[1rem] sm:text-[0.7rem] md:mt-5 md:mx-14 sm:mt-5 sm:mx-14">
            ยินดีต้อนรับสู่เว็บไซต์ของเรา! ที่นี่คือสถานที่ที่คุณสามารถสนทนาและแบ่งปันความคิดเห็นกับผู้ใช้งานคนอื่นได้อย่างอิสระ เริ่มต้นการสนทนาและสร้างความสัมพันธ์ใหม่กับเพื่อนคุณได้ทันที!
          </div>
          
        </div>
        
      </div>
      <div className="bg-white md:h-[48rem] md:w-[48rem] sm:h-[30rem] sm:w-[32rem] flex flex-col shadow-xl mr-10 h-[30rem]">
        <div className=" flex justify-center items-center h-[5rem] w-full mt-[7rem] text-2xl md:text-[3rem] md:mt-[10rem] cursor-default font-black text-blue-400" >
          Login Account
        </div>
        <p className="text-[0.6rem] text-center mx-20 cursor-default text-slate-400">
          ทำการเข้าสู่ระบบและเริ่มต้นการแชทของคุณได้ทันที !
        </p>
        <div className=" w-full h-[5rem] mt-10 md:mt-32 flex flex-col items-center justify-center">
          <form action="" className="flex flex-col">
            <div className="flex">
              <div className="bg-blue-600 h-[2.4rem] pl-1"></div>
              <input className="mb-[1rem] text-[20px] border-none rounded-xs py-1 pl-4 md:px-12 outline-none bg-slate-100" placeholder="Name" type="text" onChange={(event) => setName(event.target.value)}></input>
            </div>
            <div className="flex">
              <div className="bg-blue-600 h-[2.4rem] pl-1"></div>
              <input className="mb-[1rem] text-[20px] border-none rounded-sm py-1 pl-4 md:px-12 outline-none bg-slate-100" placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)}/>
            </div>
          </form>
        </div>
        <div className=" flex justify-center items-center md:w-full md:h-20 mt-10 rounded-lg ">
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button  type="submit" className="bg-blue-500 md:h-[3rem] md:w-[22rem] sm:w-[14rem] sm:h-[2rem] w-[16rem] h- rounded-2xl flex justify-center items-center text-white md:text-[1.5rem] cursor-pointer mx-2 font-medium">
            Join !
          </button>
        </Link>
        </div>
      </div>
    </div>
    </>
  )
} 

export default Join;
