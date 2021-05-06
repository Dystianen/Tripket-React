import '../../App.less';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import TicketTrain from '../TicketTrain/TicketTrain';

export const Train = () => {
  return (
    <>
      <Navbar />
      <TicketTrain />
    </>
  )
}

export default Train;
