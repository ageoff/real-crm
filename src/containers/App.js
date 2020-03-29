import React from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';

import { Card, Col, Row } from 'antd';

const App = () => (
  <div>
    <Row className='homeWrapper' gutter={16}>
      <Col span={24} ><img src={logo} className='App-logo' alt='logo' /></Col>
      <Col span={24}><h1>Here is the home page</h1></Col>
    </Row>
    <Row className='homeWrapperWhite' gutter={16}>
      <Col offset={3} span={6}><Card title='Card Title'>Here is a card</Card></Col>
      <Col span={6}><Card title='Card Title'>Here is a card</Card></Col>
      <Col span={6}><Card title='Card Title'>Here is a card</Card></Col>
    </Row>
    <Row className='homeWrapper' gutter={16}>
      <Col span={24} ><img src={logo} className='App-logo' alt='logo' /></Col>
      <Col span={24}><h1>Here is the home page</h1></Col>
    </Row>
  </div>
)

export default App;
