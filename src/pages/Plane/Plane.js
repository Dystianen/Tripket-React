import React from 'react';
import { Card } from 'antd';
import SearchTrain from '../../component/Form/SearchTrain';
import ParticlesBg from 'particles-bg';
import TicketPlane from '../Plane/TicketPlane';

export const Plane = () => {
  return (
    <>
      <div className='train-container'>
        <ParticlesBg type='cobweb' num={100} color='black' bg={true} />
        <Card>
          <SearchTrain title='Plane' form1='select departure airport' form2='select arrival airport'/>
        </Card>
        <TicketPlane />
      </div>
    </>
  );
};
