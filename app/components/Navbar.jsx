import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-slate-600 px-8 py-3'>
             <Link className='text-white font-bold' href="/">Get List</Link>
             <Link className='bg-white font-bold p-2' href="/addTopic">Add Topic</Link>
        </nav>
    );
};

export default Navbar;