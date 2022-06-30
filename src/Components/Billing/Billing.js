import React, { useState } from 'react';
import AddBillingHeader from './AddBillingHeader';
import BillingModal from './BillingModal';
import BillingTable from './BillingTable';

const Billing = () => {
    const [add, setAdd] = useState(false)
    return (
        <>
            <AddBillingHeader add={add} setAdd={setAdd} />
            <BillingTable />
            {/* <BillingModal /> */}
        </>
    );
};

export default Billing;