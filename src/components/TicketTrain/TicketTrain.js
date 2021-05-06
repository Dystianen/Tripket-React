import React from 'react';
import '../../App.less';
import './TicketTrain.css';

// Components
import { Card, Col, Row, Button, Modal, Form, Input, DatePicker } from 'antd';
import { CgArrowLongRight } from 'react-icons/cg';
import { InfoCircleOutlined } from '@ant-design/icons';

function TicketTrain() {
  const [form] = Form.useForm();
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const listJadwal = [
    {
      key: 1,
      from: "Pekalongan",
      to: "Asgard",
      time_to_go: "12.00 PM",
      time_to_arrived: "06.09 PM"
    },
    {
      key: 2,
      from: "Madiun",
      to: "Ngawi",
      time_to_go: "13.00 PM",
      time_to_arrived: "14.09 PM"
    },
    {
      key: 3,
      from: "Malang",
      to: "Bekasi",
      time_to_go: "12.00 PM",
      time_to_arrived: "24.00 PM"
    },
    {
      key: 4,
      from: "Yogyakarta",
      to: "Bekasi",
      time_to_go: "12.00 PM",
      time_to_arrived: "15.00 PM"
    }
  ]
  return (
    <div className='ticket-container'>
      {
        listJadwal.map(list => {
          return(
            <Card style={{
              marginTop: "1rem",
            }}>
              <Row>
                <Col span={10}>
                  <h4>{ list.from }</h4>
                  <h6>{ list.time_to_go }</h6>
                </Col>
                <Col span={4} className="arrow">
                  <CgArrowLongRight />
                </Col>
                <Col span={10}>
                  <h4>{ list.to }</h4>
                  <h6>{ list.time_to_arrived }</h6>
                </Col>
                <Col span={24}>
                  <Button type="primary" size={"size"} className="button" onClick={showModal}>Order</Button>
                </Col>

                  <Modal
                  title="Form Booking"
                  visible={visible}
                  onOk={handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={handleCancel}
                >
                  <Form
                    form={form}
                    layout="vertical"
                  >
                    <Form.Item
                      label="Jumlah Penumpang"
                      required
                      tooltip="This is a required field"
                      type="number"
                    >
                      <Input placeholder="jumlah penumpang" />
                    </Form.Item>
                    <Form.Item
                      label="Tanggal Keberangkatan"
                      required
                      tooltip={{
                        title: "Tooltip with customize icon",
                        icon: <InfoCircleOutlined />,
                      }}
                    >
                      <DatePicker/>
                    </Form.Item>
                  </Form>
                </Modal>
              </Row>
            </Card>
          )
        })
      }

    </div>
  );
}

export default TicketTrain;
