import React from 'react';
import { Tabs, Select } from 'antd';

import './SearchTab.css';
import { MdHotel } from 'react-icons/md';
import { IoTrain, IoAirplaneSharp, IoBus } from 'react-icons/io5';

import SearchTrain from '../Form/SearchTrain';

const { TabPane } = Tabs;

function SearchTab() {
  return (
    <div className='tab-container'>
      <Tabs defaultActiveKey='train' centered size='large'>
        <TabPane
          tab={
            <span>
              <MdHotel /> Hotel
            </span>
          }
          key='hotel'>
          Content of Tab Hotel
        </TabPane>
        <TabPane
          tab={
            <span>
              <IoTrain /> Train
            </span>
          }
          key='train'>
          <SearchTrain />
        </TabPane>
        <TabPane
          tab={
            <span>
              <IoAirplaneSharp /> Plane
            </span>
          }
          key='plane'>
          Content of Tab Plane
        </TabPane>
        <TabPane
          tab={
            <span>
              <IoBus /> Bus
            </span>
          }
          key='bus'>
          Content of Tab Bus
        </TabPane>
      </Tabs>
    </div>
  );
}

export default SearchTab;
