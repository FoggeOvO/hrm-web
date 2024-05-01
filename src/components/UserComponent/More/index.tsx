import { SettingTwoTone } from '@ant-design/icons';
import { Button, Form, Input, Modal, Segmented, Select, Switch } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useState } from 'react'

const Operator = () => {

    const { Option } = Select;

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

    const [open, setOpen] = useState(false);

    const [moreForm] = useForm();

    const showOperator = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onOk = () => {
        const data = moreForm.getFieldsValue();
        console.log('@@data --->', data)
        return new Promise<boolean>(() => { })
    };

    const onChange = () => {

    }

    return (
        <>
            <Button type="link" onClick={showOperator} icon={<SettingTwoTone />}>
                more
            </Button>
            <Modal
                title="人员操作"
                style={{ height: '568px', width: '68%' }}
                open={open}
                onOk={onOk}
                destroyOnClose={true}
                onCancel={onClose}
            >
                <div>
                    <Form
                        {...formItemLayout}
                        form={moreForm}
                        name="editDep"
                        preserve={false}
                        initialValues={{}}
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                        scrollToFirstError
                    >
                        <Form.Item
                            style={itemStyle}
                            name="house"
                            label="是否享有房补"
                        >
                            <Switch defaultChecked onChange={onChange} />
                        </Form.Item>

                        <Form.Item
                            style={itemStyle}
                            name="meal"
                            label="是否享有餐补"
                        >
                            <Switch defaultChecked onChange={onChange} />
                        </Form.Item>
                        <Form.Item
                            style={itemStyle}
                            name="tech"
                            label="是否技术岗"
                        >
                            <Switch defaultChecked onChange={onChange} />
                        </Form.Item>
                        <Form.Item
                            style={itemStyle}
                            name="annul"
                            label="年终奖"
                        >
                            <Select >
                                <Option value={0}>12薪</Option>
                                <Option value={1}>13薪</Option>
                                <Option value={1}>14薪</Option>
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

                </div>

            </Modal>
        </>
    )
}


export default Operator