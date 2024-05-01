import React, { useState } from 'react';
import { CheckOutlined, CloseOutlined, EditTwoTone, } from '@ant-design/icons';
import { Button, Col, DatePicker, Divider, Drawer, Form, Input, Row, Select, Space, Switch } from 'antd';
import { useForm } from 'antd/es/form/Form';


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

const Editor = (props:User) => {
  const { Option } = Select;
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const {lastname,workcode,status,position,gender,hiredate,level} = props

  const [userInfo] = useForm()

  const showDrawer = () => {
    console.log('@@props--->',props)
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSwitch = () => {
     setEdit(!edit)
  }


  userInfo.setFieldsValue({
    lastname,
    workcode,
    status,
    gender,
    level,
    position
  })

  return (
    <>
      <Button type="link" onClick={showDrawer} icon={<EditTwoTone />}>
        eidt
      </Button>
      <Drawer
        title="人员面板"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
             <Switch  
             checkedChildren={<CheckOutlined />} 
             unCheckedChildren={<CloseOutlined />} 
             onChange={onSwitch} />

            <Button onClick={onClose} >
              保存
            </Button>
          </Space>
        }
      >
        <Form 
        form={userInfo}
        layout="vertical" >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="lastname"
                label="名称"
                rules={[{ required: true }]}
              >
                <Input disabled={edit} value={lastname}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="workcode"
                label="工号"
                rules={[{ required: true }]}
              >
                <Input disabled={true} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="status"
                label="人员状态"
                rules={[{ required: true }]}
              >
                <Select disabled={true}>
                  <Option value={0}>试用</Option>
                  <Option value={1}>正式</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="hiredate"
                label="入职日期"
                rules={[{ required: true }]}
              >
                <DatePicker disabled={edit} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="性别"
                rules={[{ required: true }]}
              >
                <Select disabled={edit}>
                  <Option value={0}>Female</Option>
                  <Option value={1}>Male</Option>
                </Select>
              </Form.Item>
            </Col>

          </Row>

          <Divider />

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="level"
                label="职级"

              >
                <Input disabled={edit} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="position"
                label="岗位"
              >
                <Input disabled={edit} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="note"
                label="备注"
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default Editor;