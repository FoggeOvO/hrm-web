import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Space, Table, TableProps, Tag } from 'antd';
import './index.css'
import React from 'react'
import classNames from 'classnames';

const Field = () => {
    const addField = () => { }
    const delField = () => { }
    const edit = () => { }
    const del = () => { }
    interface DataType {
        key: string;
        fieldName: string;
        fieldValue: string;
        fieldType: number;
        selectId: number
    }

    const columns: TableProps<DataType>['columns'] = [
        {
            title: '字段显示名',
            dataIndex: 'showName',
            key: 'showName',
            align: 'center'
        },
        {
            title: '字段名称',
            dataIndex: 'fieldName',
            key: 'fieldName',
            align: 'center'
        },
        {
            title: '字段类型',
            dataIndex: 'fieldType',
            key: 'fieldType',
            align: 'center'
        },
        {
            title: '关联选择框',
            key: 'select_id',
            dataIndex: 'select_id',
            align: 'center'
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={edit}>修改</Button>
                    <Button danger onClick={del}>删除</Button>
                </Space>
            ),
            align: 'center'
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            fieldName: '是否享有房补',
            fieldValue: 'field1',
            fieldType: 1,
            selectId: -1,
        },
        {
            key: '2',
            fieldName: '是否享有餐补',
            fieldValue: 'field2',
            fieldType: 1,
            selectId: -1,
        },
        {
            key: '3',
            fieldName: '是否享技术岗',
            fieldValue: 'field3',
            fieldType: 1,
            selectId: -1,
        },
        {
            key: '4',
            fieldName: '年终奖政策',
            fieldValue: 'field4',
            fieldType: 1,
            selectId: 2,
        },
    ];

    return (
        <PageContainer >
            <Card id='dept-body' style={{ height: '768px'}}>
                <Card id='head-content' className='clearfix'>
                    <Button type="primary" onClick={addField} style={{ marginLeft: '15px', }} className='rightfix'>+</Button>
                    <Button type="primary" onClick={delField} style={{ marginLeft: '15px', }} className='rightfix'>-</Button>
                </Card>

                <Table columns={columns} dataSource={data} />

            </Card>
        </PageContainer>
    )
}


export default Field