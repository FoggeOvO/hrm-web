import { Button, Form, Input, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { forwardRef } from 'react'

interface DepDetailProps {
    dispaly: boolean
    selectdInfo?: SelectdInfo
    save: (value:any) => any
}

interface SelectdInfo {
    title: string | undefined
    key: number | undefined
    code: string | undefined
    type: number | undefined
    note: string | undefined
    children?: SelectdInfo[]
}

export interface ChildComponentMethods {
    childMethod: () => void;
}

const DepDetail = (props: DepDetailProps) => {

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };

    const itemStyle = {
        marginTop: '32px'
    }
    const { Option } = Select;

    const { dispaly, save } = props
    console.log(props)

    const { title, key, code, type, note } = props.selectdInfo || {}


    const onFinish = (values: any) => {
        console.log('@@form --->',form)
        console.log('Received values of form: ', values);
    };



    const [form] = useForm();
    form.setFieldsValue({
        'depname': title,
        'depid': key,
        'depcode': code,
        'type': type,
        'note': note
    })

    return (
        <>
            <Form
                {...formItemLayout}
                form={form}
                name="editdep"
                onFinish={save(onFinish)}
                initialValues={{}}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                scrollToFirstError
                disabled={dispaly}
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
                    <Input value={123} disabled={true} />
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
                    <Input value={123} />
                </Form.Item>

                <Form.Item
                    style={itemStyle}
                    name="type"
                    label="部门类别"
                    rules={[{ required: true, }]}
                >
                    <Select>
                        <Option value={-1}>总部</Option>
                        <Option value={0}>事业群</Option>
                        <Option value={1}>事业处</Option>
                        <Option value={2}>部门</Option>
                        <Option value={3}>组</Option>
                    </Select>
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
                    <Input.TextArea autoSize={{ minRows: 4, maxRows: 6 }} />
                </Form.Item>

                <Form.Item style={itemStyle} >
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}


export default DepDetail