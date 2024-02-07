import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { PiNotepadFill } from "react-icons/pi";
import { useState } from 'react';

export const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div className='cursor-pointer' onClick={() => setDrawer(!drawer)}>
          <AiOutlineMenu size={20} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
        </h1>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] md:w-[400px] lg:w-[400px]'>
        <AiOutlineSearch size={25} />

        <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search foods...' />
      </div>

      {/* Cart button */}
      <button className='bg-black text-white text-center py-2 rounded-full'>
        <BsFillCartFill size={20} />
      </button>

      {/* Mobile menu */}
      {/* Overlay */}
      {drawer && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' onClick={() => setDrawer(!drawer)} />}

      {/* Side drawer menu */}
      <div className={
        drawer ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' :
          'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
      }>
        <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => setDrawer(!drawer)} />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>

        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
              <PiNotepadFill size={25} className='mr-4' /> Orders
            </li>

            <li className='text-xl py-4 flex'>
              <MdFavorite size={25} className='mr-4' /> Favorites
            </li>

            <li className='text-xl py-4 flex'>
              <FaWallet size={25} className='mr-4' /> Wallet
            </li>

            <li className='text-xl py-4 flex'>
              <MdHelp size={25} className='mr-4' /> Help
            </li>

            <li className='text-xl py-4 flex'>
              <AiFillTag size={25} className='mr-4' /> Promotions
            </li>

            <li className='text-xl py-4 flex'>
              <BsFillSaveFill size={25} className='mr-4' /> Best Ones
            </li>

            <li className='text-xl py-4 flex'>
              <FaUserFriends size={25} className='mr-4' /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
