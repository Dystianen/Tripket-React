import React from 'react';
import { Row, Col, Form, Button, Select, DatePicker } from 'antd';
import { Link } from 'react-router-dom';

import './SearchTrain.css';

const { Option } = Select;

function SearchTrain(props) {
  const [form] = Form.useForm();

  const station = [
    {
      value: 'wakanda',
      label: 'Wakanda',
    },
    {
      value: 'asgard',
      label: 'Asgard',
    },
    {
      value: 'ego',
      label: 'Ego',
    },
    {
      value: 'xandar',
      label: 'Xandar',
    },
    {
      value: 'sakaar',
      label: 'Sakaar',
    },
    {
      value: 'pekalongan',
      label: 'Pekalongan',
    },
  ];
  const stationOption = () => station.map((station) => <Option value={station.value}>{station.label}</Option>);
  return (
    <div className='search-train-container'>
      <h1>{props.title}</h1>
      <Form form={form} name='search-train'>
        <Row gutter={8} justify='space-between' align='middle'>
          <Col xs={24} sm={24} md={24} lg={13} xl={9}>
            <Form.Item name='Departure' label='From'>
              <Select placeholder={props.form1} allowClear>
                {stationOption()}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={13} xl={9}>
            <Form.Item name='Arrival' label='To'>
              <Select placeholder={props.form2} allowClear>
                {stationOption()}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={4} xl={6}>
            <Form.Item label='Date'>
              <DatePicker />
            </Form.Item>
          </Col>
          <Col
            span={24}
            style={{
              textAlign: 'right',
            }}>
            <Link to='/app/train'>
              <Button type='primary'>Search</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchTrain;
