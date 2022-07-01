import React from 'react';

const Header = ({ count }) => {
    console.log(count)
    return (
        <header className='px-20 bg-gray-300 flex justify-between h-16 items-center text-xl'>
            <div>Power Hack</div>
            <div>Paid Total: {count}</div>
        </header>
    );
};

export default Header;