import React, { useState } from 'react';
import PaymentList from './PaymentList';
import PaymentDetail from './PaymentDetail';

const PaymentsPage = () => {
  const [selectedPaymentId, setSelectedPaymentId] = useState(null);

  return (
    <div>
      {!selectedPaymentId ? (
        <PaymentList onSelectPayment={setSelectedPaymentId} />
      ) : (
        <PaymentDetail paymentId={selectedPaymentId} onBack={() => setSelectedPaymentId(null)} />
      )}
    </div>
  );
};

export default PaymentsPage;