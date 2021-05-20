import React from 'react';
import { Card } from 'antd';
import SearchTrain from '../../component/Form/SearchTrain';
import ParticlesBg from 'particles-bg';
import TicketBus from '../Bus/TicketBus';

export const Bus = () => {
  return (
    <>
      <div className='train-container'>
        <ParticlesBg type='cobweb' num={100} color='black' bg={true} />
        <Card>
          <SearchTrain title='Busway' form1='select departure terminal' form2='select arrival terminal' />
        </Card>
        <TicketBus />
      </div>
    </>
  );
};
