import { useEffect, useState } from "react";

const useBilling = (page) => {
    const [billings, setBillings] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/billing-list?page=${page}`)
            .then(res => res.json())
            .then(result => {
                setBillings(result.result)
            })
    }, [page])
    return [billings]
}
export default useBilling;
