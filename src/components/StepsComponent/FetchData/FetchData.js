import React, { useState } from 'react';
import { message, Tabs } from 'antd';
import {
  CustomInput,
  Button,
  Input,
  Container,
  Col,
  Row,
  Form,
} from 'reactstrap';
const { TabPane } = Tabs;

export const FetchData = () => {
  const [loading, setLoading] = useState(false);
  const fileUploadedMessage = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      message.success('File Uploaded Successfully');
      setLoading(false);
    }, 5000);
  };
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Upload CSV File" key="1">
        <Form onSubmit={fileUploadedMessage}>
          <Row>
            <Col xs={12} md={8}>
              <CustomInput
                type="file"
                id="exampleCustomFileBrowser"
                name="customFile"
                label="Select CSV File to Upload"
                required
              />
            </Col>
            <Col
              xs={12}
              md={4}
              className="d-flex mt-3 mt-md-0 justify-content-center justify-content-md-start"
            >
              <Button color="primary" type="submit">
                {loading ? 'Uploading File....' : 'Upload'}
              </Button>
            </Col>
          </Row>
        </Form>
      </TabPane>
      <TabPane tab="Get From Twitter" key="2">
        <Row className="align-content-center align-items-center">
          <Col xs={12} md={8}>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="Enter Keyword to Search"
            />
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center justify-content-md-start"
          >
            <Button color="primary">Search</Button>
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="Single Query" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};
