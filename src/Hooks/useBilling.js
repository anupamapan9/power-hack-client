import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useBilling = (page, text, refetch) => {
    const [billings, setBillings] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5000/billing-list?page=${page}&search=${text}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                console.log(res)
                if (res.status === 401 || res.status === 403) {
                    console.log('he')
                    localStorage.removeItem('accessToken');
                    navigate('/login');

                }
                return res.json()
            })
            .then(result => {
                setBillings(result.result)
            })
    }, [page, text, refetch])
    return [billings]
}
export default useBilling;
