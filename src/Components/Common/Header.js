import React from 'react';

const Header = ({ count }) => {
    const user = localStorage.getItem('accessToken')
    return (
        <header className='px-20 bg-gray-300 flex justify-between h-16 items-center text-xl'>
            <div>Power Hack</div>
            {
                user ? <div>Paid Total: {count}</div> : <span className='font-black text-red-900'>Login to proceed</span>
            }

        </header>
    );
};

export default Header;