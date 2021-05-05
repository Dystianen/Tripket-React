// Assets
import React, {useState} from 'react';
import './HeroSection.css';
import '../../App.less';

import { MdHotel } from 'react-icons/md';
import { IoTrain, IoAirplaneSharp, IoBus } from 'react-icons/io5';

// Component
import { Tabs, Form, Button, Select } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;

function HeroSection() {
  const [form] = Form.useForm();

  const [selectedGroupKey, setselectedGroupKey] = useState(1);
  const formGroup = [
    {
      key: "train",
      departure: "Departure Station",
      till: "Arrived Station"
    }
  ];
  const selectedGroup = formGroup.find(it => it.key === selectedGroupKey);
  return (
    <div className='hero-container'>
      <Tabs defaultActiveKey='train' centered>
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
          <Form form={form} name='control-hooks' layout='inline'>
            <Form.Item name="Departure Station" label='From'>
              <Select placeholder='Select Departure Station' allowClear>
                <Option value='wakanda'>Wakanda</Option>
                <Option value='asgard'>Asgard</Option>
                <Option value='ego'>Ego</Option>
                <Option value='vormir'>Vormir</Option>
                <Option value='xandar'>Xandar</Option>
                <Option value='sakaar'>Sakaar</Option>
                <Option value='pekalongan'>Pekalongan</Option>
              </Select>
            </Form.Item>
            <Form.Item name="Arrived Station" label='To'>
              <Select placeholder='Select Arrival Station' allowClear>
                <Option value='wakanda'>Wakanda</Option>
                <Option value='asgard'>Asgard</Option>
                <Option value='ego'>Ego</Option>
                <Option value='vormir'>Vormir</Option>
                <Option value='xandar'>Xandar</Option>
                <Option value='sakaar'>Sakaar</Option>
                <Option value='pekalongan'>Pekalongan</Option>
              </Select>
            </Form.Item>
            <Button type='primary'>Search</Button>
          </Form>
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

export default HeroSection;