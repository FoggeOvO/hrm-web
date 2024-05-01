
import { DatePicker, Form, Input, Modal, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'

interface UserCreaterProps {
    newUser: boolean
    setNewUser: (value:boolean) => void
}


const UserCreater = (props: UserCreaterProps) => {

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

    const { newUser, setNewUser } = props

    const onHireDateChange = () => {
        
    }

    const onOk = () => {
        const data = form.getFieldsValue();
        console.log('@@data --->', data)
        return new Promise<boolean>(()=>{})
    };


    return (
        <>
            <Modal
                title="新建人员"
                style={{ height: '568px', width: '68%' }}
                open={newUser}
                onOk={onOk}
                destroyOnClose={true}
                onCancel={()=>{setNewUser(false)}}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    name="newuser"
                    preserve={false}
                    initialValues={{status: 0, }}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    scrollToFirstError
                >
                    <Form.Item
                        style={itemStyle}
                        name="lastname"
                        label="员工名称"
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
                        name="workcode"
                        label="工号"
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
                        name="depid"
                        label="所属部门"
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
                        name="gender"
                        label="性别"
                        rules={[{ required: true, }]}
                    >
                        <Select>
                            <Option value={0}>Female</Option>
                            <Option value={1}>Male</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        style={itemStyle}
                        name="status"
                        label="人员状态"
                        rules={[{ required: true }]}
                    >
                        <Select>
                            <Option value={0}>试用</Option>
                            <Option value={1}>正式</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        style={itemStyle}
                        name="hiredate"
                        label="入职日期"
                        rules={[{ required: true }]}
                    >
                        <DatePicker onChange={onHireDateChange} />
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


export default UserCreater