import React from 'react';
import { Breadcrumb } from 'antd';

function BreadcrumbComponent() {
    return(
        <Breadcrumb style={{ margin: '16px 16px' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadcrumbComponent;
