import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Space, Table, TableProps, Tag } from 'antd';
import './index.css'
import React from 'react'
import classNames from 'classnames';

const Field = () => {
    const addField = () => { }
    const delField = () => { }

    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const columns: TableProps<DataType>['columns'] = [
        {
            title: '字段显示名',
            dataIndex: 'showName',
            key: 'showName',
        },
        {
            title: '字段名称',
            dataIndex: 'fieldName',
            key: 'fieldName',
        },
        {
            title: '字段类型',
            dataIndex: 'fieldType',
            key: 'fieldType',
        },
        {
            title: '关联选择框',
            key: 'select_id',
            dataIndex: 'select_id',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <PageContainer >
            <div id='dept-body' style={{ height: '768px', width: '100%', }}>
                <div id='head' style={{ height: '10%', marginBottom: '8px' }}>
                    <Card id='head-content' style={{ height: '100%', width: '100%' }} className='clearfix'>
                        <Button type="primary" onClick={addField} style={{ marginLeft: '15px', }} className='rightfix'>+</Button>
                        <Button type="primary" onClick={delField} style={{ marginLeft: '15px', }} className='rightfix'>-</Button>
                    </Card>
                </div>
                <div id='content' style={{ display: 'flex', justifyContent: 'space-between', height: '80%', width: '95%' }}>
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        </PageContainer>
    )
}


export default Field