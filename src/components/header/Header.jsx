import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function HeaderComponent() {
    return(
        <Header className="header">
            <div className="logo"
                style={{
                    width: '120px',
                    height: '31px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    margin: '16px 28px 16px 0',
                    float: 'left',
                }}/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">Dashboard</Menu.Item>
                <Menu.Item key="2">Notification</Menu.Item>
                <Menu.Item key="3">Reports</Menu.Item>
            </Menu>
        </Header>
    );
}

export default HeaderComponent;