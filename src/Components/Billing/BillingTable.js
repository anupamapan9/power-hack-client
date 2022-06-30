import React, { useState } from 'react';

const BillingTable = () => {

    return (


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-20 mt-6">
            <table class="w-full text-sm text-left text-gray-500 cursor-default">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Billing Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Full Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Paid Amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
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
                            <button>Edit</button>  <span className='mx-2'>|</span>
                            <button>Delete</button>
                        </td>
                    </tr>
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
                            <button>Edit</button>  <span className='mx-2'>|</span>
                            <button>Delete</button>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>


    );
};

export default BillingTable;