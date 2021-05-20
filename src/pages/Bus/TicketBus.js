// ESSENCES
import React, { useState } from 'react';

// COMPONENTS
import { Row, Col, Card, Modal, Button, Form, Input, DatePicker, TimePicker } from 'antd';
import moment from 'moment';

// ASSETS
import { CgArrowLongRight, CgArrowUpO, CgArrowDownO } from 'react-icons/cg';
import { IoTicket, IoTrain, IoArrowUpCircle, IoArrowDownCircle } from 'react-icons/io5';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

// STYLES
import './TicketBus.css';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

function TicketBus() {
  const dateFormat = 'YYYY-MM-DD';
  const [form] = Form.useForm();
  // ORDER HOLDER
  let orderHolder = {
    train: '',
    price: 0,
    depart: {
      station: '',
      date: '',
      time: '',
    },
    arrive: {
      station: '',
      date: '',
      time: '',
    },
    person: 0,
    total: 0,
  };

  // MODAL HANDLER
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');
  const [order, setOrder] = React.useState(orderHolder);

  const showModal = (train, depart, arrive, price) => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('Processing order');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  //   SCHEDULE HANDLER
  const trainSchedule = [
    {
      train: 'Thomas',
      price: 40.001,
      depart: {
        station: 'Pekalongan',
        date: '2021-05-03',
        time: '12:00 PM',
      },
      arrive: {
        station: 'Asgard',
        date: '2021-05-03',
        time: '12:02 PM',
      },
    },
    {
      train: 'Kaligung',
      price: 69.001,
      depart: {
        station: 'Wakanda',
        date: '2021-05-03',
        time: '06:00 PM',
      },
      arrive: {
        station: 'Bekasi',
        date: '2021-05-03',
        time: '09:00 PM',
      },
    },
    {
      train: 'Kamandaka',
      price: 69.696,
      depart: {
        station: 'Wakanda',
        date: '2021-05-03',
        time: '06:00 PM',
      },
      arrive: {
        station: 'Ego',
        date: '2021-05-03',
        time: '09:00 PM',
      },
    },
  ];
  const getSchedule = () =>
    trainSchedule.map((schedule) => (
      <Card
        className='ticket'
        title={
          <h4>
            <IoTicket /> {schedule.train}
          </h4>
        }
        bordered={false}
        extra={<h4>Rp. {schedule.price}</h4>}
        actions={[
          <Button secondary type='primary' onClick={showModal}>
            Order
          </Button>,
        ]}>
        <Row justify='end'>
          <Col span={10}>
            <h4>{schedule.depart.station}</h4>
            <h5>{schedule.depart.date}</h5>
            <h5>{schedule.depart.time}</h5>
          </Col>
          <Col span={4}>
            <h4> </h4>
            <h2>
              <CgArrowLongRight />
            </h2>
          </Col>
          <Col span={10}>
            <h4>{schedule.arrive.station}</h4>
            <h5>{schedule.arrive.date}</h5>
            <h5>{schedule.arrive.time}</h5>
          </Col>
        </Row>
      </Card>
    ));

  return (
    <div className='tickets-container'>
      {getSchedule()}

      <Modal title='Book Ticket' visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <Form form={form} name='search-train'>
          <Form.Item label='Kereta'>
            <Input value='Kamandaka' disabled={true} prefix={<IoTrain />} />
          </Form.Item>
          <Form.Item label='Depart'>
            <Input value='Pekalongan' disabled={true} prefix={<IoArrowUpCircle />} />
            <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
            <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
          </Form.Item>
          <Form.Item label='Arrive'>
            <Input value='Asgard' disabled={true} prefix={<IoArrowDownCircle />} />
            <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
            <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
          </Form.Item>
          <Form.List
            name='names'
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 1) {
                    return Promise.reject(new Error('At least 1 passengers'));
                  }
                },
              },
            ]}>
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)} label={index === 0 ? 'Passengers' : ''} required={false} key={field.key}>
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input passenger's name or delete this field.",
                        },
                      ]}
                      noStyle>
                      <Input placeholder='passenger name' style={{ width: '60%' }} />
                    </Form.Item>
                    {fields.length > 1 ? <AiOutlineMinusCircle className='dynamic-delete-button' onClick={() => remove(field.name)} /> : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button type='dashed' onClick={() => add()} style={{ width: '60%' }} icon={<AiOutlinePlusCircle />}>
                    Add Passenger
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
          <Row gutter={24} justify='end'>
            <Col>
              <h4>Total: </h4>
            </Col>
            <Col>
              <h4>Rp. 99.999</h4>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}

export default TicketBus;
