import { useEffect, useState } from "react";

const useBilling = (page, text, refetch) => {
    const [billings, setBillings] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/billing-list?page=${page}&search=${text}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(result => {
                setBillings(result.result)
            })
    }, [page, text, refetch])
    return [billings]
}
export default useBilling;
