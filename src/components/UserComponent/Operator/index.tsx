
import Choose from '@/components/DeptComponent/Choose';
import { SettingTwoTone } from '@ant-design/icons';
import { Button, Form, Input, Modal, Segmented, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import Search from 'antd/es/input/Search';
import React, { useState } from 'react'


interface User {
    id?: number
    username?: string
    type?: string
    gender?: string
    lastname?: string
    level?: string
    workcode?: string
    position?: string
    depid?: number
    hiredate?: string
    status?:number
    access?: number
    deleted?: number
  }
  

const Operator = (props:User) => {

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

    const {depid,status} = props

    const [open, setOpen] = useState(false);
    const [searched,setSearched] = useState(false);
    const [newdep,setNewdep] = useState<{key?:number,title?:string}>({})
    console.log('@@newdep --->', newdep)

    const {key,title} = newdep

    const [segItem, setSegItem] = useState<boolean>(true)
    const [form] = useForm();
    const { Option } = Select;

    const showOperator = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onOk = () => {
        const data = depForm.getFieldsValue();
        console.log('@@data --->', data)
        return new Promise<boolean>(() => { })
    };

    const onChange = (value:string | number) => {
        value === '类别变动'?setSegItem(false):setSegItem(true)
    }

    const onSearch = () => {
        setSearched(true)
    }

    const [depForm] = useForm();
    depForm.setFieldsValue({
        orgDep:depid,
        orgStatus:status,
        newDep:title
    })

    return (
        <>
            <Button type="link" onClick={showOperator} icon={<SettingTwoTone />}>
                op
            </Button>
            <Modal
                title="人员操作"
                style={{ height: '568px', width: '68%' }}
                open={open}
                onOk={onOk}
                destroyOnClose={true}
                onCancel={onClose}
            >
                <Segmented options={['部门调动', '类别变动',]} onChange={onChange}/>
                <div>
                    {segItem?<Form
                        {...formItemLayout}
                        form={depForm}
                        name="editDep"
                        preserve={false}
                        initialValues={{  }}
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                        scrollToFirstError
                    >
                        <Form.Item
                            style={itemStyle}
                            name="orgDep"
                            label="原部门"
                        >
                            <Input  disabled/>
                        </Form.Item>

                        <Form.Item
                            style={itemStyle}
                            name="newDep"
                            label="调动后部门"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                               <Search onSearch={onSearch} style={{ width: 200 }} value={title}/>
                        </Form.Item>

                        {/* 这里是选择部门得框框 */}
                        <Choose {...{searched, setSearched, setNewdep}}/> 

                        <Form.Item
                            style={itemStyle}
                            name="note"
                            label="备注"
                        >
                            <Input.TextArea autoSize={{ minRows: 4, maxRows: 6 }} />
                        </Form.Item>
                    </Form>:
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="editStatus"
                        preserve={false}
                        initialValues={{  }}
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                        scrollToFirstError
                    >
                        <Form.Item
                            style={itemStyle}
                            name="orgStatus"
                            label="原状态"
                        >
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item
                            style={itemStyle}
                            name="newStatus"
                            label="调动后状态"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select>
                                <Option value={0}>试用</Option>
                                <Option value={1}>正式</Option>
                                <Option value={2}>离职</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            style={itemStyle}
                            name="note"
                            label="备注"
                        >
                            <Input.TextArea autoSize={{ minRows: 4, maxRows: 6 }} />
                        </Form.Item>
                    </Form>}
                    
                </div>

            </Modal>
        </>
    )
}


export default Operator