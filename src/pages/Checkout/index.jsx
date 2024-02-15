import React, { useState } from 'react';
import { PAGE_STATES } from './constants';
import InitialView from './views/Initial';
import PaymentView from './views/Payment';

const Checkout = () => {
  const [pageState, setPageState] = useState(PAGE_STATES.INITIAL);

  return pageState === PAGE_STATES.INITIAL ? (
    <InitialView changePageState={setPageState} />
  ) : (
    <PaymentView />
  );
};

export default Checkout;
