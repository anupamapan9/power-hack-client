import React from 'react';
import BillingModal from './BillingModal';
import { AiOutlineReload } from 'react-icons/ai'
const AddBillingHeader = ({ add, setAdd, handelSubmit, setText }) => {
    const _id = 1;

    const handelSearch = e => {
        e.preventDefault()
        const text = e.target.searched.value;
        setText(text)
    }

    return (
        <section className='px-20 mt-10'>
            <div className='flex justify-between items-center bg-gray-300 px-10 py-2'>
                <div>Billing:
                    <form onSubmit={handelSearch} className='inline pl-5'>
                        <input type="text" name='searched' className='border border-gray-500 bg-transparent focus:outline-0 placeholder:text-black px-2 py-1 mr-2' placeholder='Search...' required />
                        <input type="submit" value="submit" className='text-white bg-green-900 px-2 py-1' />
                    </form>
                    <button className='ml-3 text-xl font-bold text-green-900 tooltip tooltip-success' data-tip="Reload" onClick={() => setText('')}>

                        <AiOutlineReload />
                    </button>
                </div>
                <div>
                    {/* <label className="btn modal-button">open modal</label> */}
                    <label for="add-modal" className='text-white bg-green-900 px-2 py-1' onClick={() => setAdd(!add)}>Add New Bill</label>
                </div>
            </div>
            {
                add && <BillingModal
                    add={add}
                    setAdd={setAdd}
                    handelSubmit={handelSubmit}
                    id={_id} />
            }
        </section>
    );
};

export default AddBillingHeader;