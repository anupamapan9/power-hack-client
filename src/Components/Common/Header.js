import React, { useEffect, useState } from 'react';

const Header = ({ count }) => {
    const user = localStorage.getItem('accessToken')
    const [countEle, setCountEle] = useState(null)
    useEffect(() => {
        if (user) {
            setCountEle(<div>Paid Total: {count}</div>)
        } else {
            setCountEle(<span className='font-black text-red-900'>Login to proceed</span>)
        }
    }, [user, count])
    return (
        <header className='px-20 bg-gray-300 flex justify-between h-16 items-center text-xl'>
            <div>Power Hack</div>

            {countEle}

        </header>
    );
};

export default Header;