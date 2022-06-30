import React from 'react';
import BillingModal from './BillingModal';

const BillingRow = ({ add, setAdd }) => {
    console.log(add)
    return (<>
        <tr class="border-b odd:bg-white even:bg-gray-50 font-medium text-gray-600">
            <td class="px-6 py-4 ">
                1654841651659894
            </td>
            <td class="px-6 py-4">
                Anupam Mitra
            </td>
            <td class="px-6 py-4">
                anupamapan0905@gmail.com
            </td>
            <td class="px-6 py-4">
                01755114282
            </td>
            <td class="px-6 py-4">
                2500
            </td>
            <td class="px-6 py-4">
                <label for="my-modal" className='text-green-800 cursor-pointer' onClick={() => setAdd(!add)}>Edit</label>
                <span className='mx-2'>|</span>
                <button className='text-red-900'>Delete</button>
            </td>
        </tr>
        {
            add && <BillingModal />
        }
    </>

    );
};

export default BillingRow;