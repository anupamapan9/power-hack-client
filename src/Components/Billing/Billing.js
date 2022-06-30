import React from 'react';
import AddBillingHeader from './AddBillingHeader';
import BillingModal from './BillingModal';
import BillingTable from './BillingTable';

const Billing = () => {
    return (
        <>
            <AddBillingHeader />
            <BillingTable />
            <BillingModal />
        </>
    );
};

export default Billing;