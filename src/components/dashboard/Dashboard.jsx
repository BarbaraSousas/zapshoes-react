import React from 'react';
import { Layout, List } from 'antd';
import BreadcrumbComponent from '../breadCrumb/BreadcrumbComponent';
import Graphics from './Graphics';
import CalendarComponent from './calendar/Calendar';

const { Content } = Layout;

function Dashboard() {
    const data = [
        "Customer id: 93993 needs assistence due to delivery delay.",
        "Customer id: 4434 needs a apologize handmaid letter.",
        "Customer id: 93993 needs assistence due to delivery delay.",
        "Customer id: 93993 needs assistence due to delivery delay.",
        "Customer id: 93993 needs assistence due to delivery delay.",
    ]
    return (
        <Content style={{ padding: '0 50px' }}>
            <BreadcrumbComponent></BreadcrumbComponent>
            <Layout>
                <Content
                    style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <h1>Customers satisfaction indice</h1>
                    <Graphics />

                    <h1
                        style={{ marginTop: '30px' }}>
                        Relationship with customers
                    </h1>
                    <List
                        size="small"
                        bordered
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />

                    <h1
                        style={{ marginTop: '30px' }}>
                        Delivery schedule
                    </h1>
                    <CalendarComponent />
                </Content>
            </Layout>
        </Content>
    );
}

export default Dashboard;