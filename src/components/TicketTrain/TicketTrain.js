import React from 'react';
import '../../App.less';
import './TicketTrain.css';

// Components
import { Row, Col, Card } from 'antd';
import { CgArrowLongRight } from 'react-icons/cg';

function TicketTrain() {
  return (
    <div className='ticket-container'>
      <Card>
        <Row>
          <Col span={10}>
            <h2>Pekalongan</h2>
            <h4>12.00 PM</h4>
          </Col>
          <Col span={4}>
            <CgArrowLongRight />
          </Col>
          <Col span={10}>
            <h2>Asgard</h2>
            <h4>06.09 PM</h4>
          </Col>
        </Row>
      </Card>
      <Card>
        <Row>
          <Col span={10}>
            <h2>Pekalongan</h2>
            <h4>12.00 PM</h4>
          </Col>
          <Col span={4}>
            <CgArrowLongRight />
          </Col>
          <Col span={10}>
            <h2>Asgard</h2>
            <h4>06.09 PM</h4>
          </Col>
        </Row>
      </Card>
      <Card>
        <Row>
          <Col span={10}>
            <h2>Pekalongan</h2>
            <h4>12.00 PM</h4>
          </Col>
          <Col span={4}>
            <CgArrowLongRight />
          </Col>
          <Col span={10}>
            <h2>Asgard</h2>
            <h4>06.09 PM</h4>
          </Col>
        </Row>
      </Card>
      <Card>
        <Row>
          <Col span={10}>
            <h2>Pekalongan</h2>
            <h4>12.00 PM</h4>
          </Col>
          <Col span={4}>
            <CgArrowLongRight />
          </Col>
          <Col span={10}>
            <h2>Asgard</h2>
            <h4>06.09 PM</h4>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default TicketTrain;
