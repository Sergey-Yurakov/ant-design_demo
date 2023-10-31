import React from 'react';

import './App.css';
import { Col, Divider, Row } from 'antd';
import { Header } from '../Header/Header';
import { TableComponent } from '../TableComponent/TableComponent';

function App() {
    return (
        <div className="App">
            <Header />
            <Divider />
            <Row>
                <Col xs={24} md={{ span: 14, offset: 4 }}>
                    <TableComponent />
                </Col>
            </Row>
        </div>
    );
}

export default App;
