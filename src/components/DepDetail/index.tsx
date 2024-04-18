import { useParams } from '@umijs/max'
import { Button, Form, Input, Select } from 'antd'
import React from 'react'

interface DepDetailProps{
    saveButton:boolean
}


const DepDetail = ({ saveButton } : DepDetailProps) => {

    const itemStyle = {
        marginTop: '32px'
    }
    const { Option } = Select;

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const [form] = Form.useForm();
    return (
        <>
            <Form
                form={form}
                name="editdep"
                onFinish={onFinish}
                initialValues={{}}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                scrollToFirstError
                disabled={false}
            >
                <Form.Item
                    style={itemStyle}
                    name="depname"
                    label="部门名称"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    style={itemStyle}
                    name="depid"
                    label="部门id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input disabled={false} />
                </Form.Item>

                <Form.Item
                    style={itemStyle}
                    name="depcode"
                    label="部门代码"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    style={itemStyle}
                    name="division"
                    label="事业处"
                    rules={[{ required: true, }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    style={itemStyle}
                    name="status"
                    label="部门状态"
                    rules={[{ required: true }]}
                >
                    <Select>
                        <Option value="0">启用</Option>
                        <Option value="1">作废</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    style={itemStyle}
                    name="note"
                    label="备注"
                >
                    <Input.TextArea autoSize={{ minRows: 4, maxRows: 6 }}  />
                </Form.Item>

                <Form.Item style={itemStyle} hidden={saveButton}>
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default DepDetail