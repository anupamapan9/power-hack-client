import React from 'react';
import BillingRow from './BillingRow';

const BillingTable = ({ add, setAdd, setCurrentPage, currentPage, pages, billings }) => {



    return (

        <>
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
                        {
                            billings?.reverse().map(billing => <BillingRow billing={billing} key={billing._id} add={add} setAdd={setAdd} />)
                        }
                    </tbody>
                </table>
            </div>
            <div className='text-center my-5'>
                {
                    [...Array(pages).keys()].map(num => <button key={num} className={currentPage === num ? "btn btn-xs bg-green-900 rounded-none mx-1" : "btn btn-xs rounded-none mx-1"}

                        onClick={() => setCurrentPage(num)}
                    >{num + 1}</button>)
                }
            </div>
        </>



    );
};

export default BillingTable;