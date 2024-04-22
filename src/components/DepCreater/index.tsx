
import { Form, Input, Modal, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'

interface DepDetailProps {
    newdep: boolean
    setNewdep: (value:boolean) => void
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

    const [form] = useForm();

    const { newdep, setNewdep } = props

    const onOk = () => {
        const data = form.getFieldsValue();
        console.log('@@data --->', data)
        return new Promise<boolean>(()=>{})
    };


    return (
        <>
            <Modal
                title="部门创建"
                style={{ height: '568px', width: '68%' }}
                open={newdep}
                onOk={onOk}
                destroyOnClose={true}
                onCancel={()=>{setNewdep(false)}}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    name="editdep"
                    preserve={false}
                    initialValues={{status: 0, }}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    scrollToFirstError
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
                        <Select disabled={true}>
                            <Option value={0}>启用</Option>
                            <Option value={1}>作废</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        style={itemStyle}
                        name="note"
                        label="备注"
                    >
                        <Input.TextArea autoSize={{ minRows: 4, maxRows: 6 }} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}


export default DepDetail