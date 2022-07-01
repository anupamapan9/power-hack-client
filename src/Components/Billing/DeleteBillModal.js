import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const DeleteBillModal = ({ confirmDelete, setConfirmDelete, id, refetch, setRefetch }) => {
    const navigate = useNavigate()
    const handelDelete = (id) => {
        fetch(`http://localhost:5000/delete-billing/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/login');
                    localStorage.removeItem('accessToken');
                    toast.error("Forbidden")
                }
                return res.json()
            })
            .then(data => {
                if (data.deletedCount > 0) {
                    setRefetch(!refetch)

                }
            })
        setConfirmDelete(!confirmDelete)
    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box rounded-none">
                    <h1 className='text-center text-error font-semibold text-2xl'> Warning!!!</h1>
                    <p className='font-semibold my-10'>Are you sure want to delete <span className='font-black text-error'> {id}</span> billing Info?</p>
                    <div className='flex justify-between'>
                        <button className='btn btn-error btn-sm text-white' onClick={() => handelDelete(id)}>Delete</button>
                        <button className='btn btn-sm' onClick={() => setConfirmDelete(!confirmDelete)}>Close</button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeleteBillModal;