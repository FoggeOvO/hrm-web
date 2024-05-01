import React, { useState } from 'react'
import { ModalForm, PageContainer } from '@ant-design/pro-components';
import { Button, Card, Form, Input, Select, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { createStyles } from 'antd-style';
import { useForm } from 'antd/es/form/Form'
import DepDetail from '@/components/DeptComponent/Creater';




interface SelectdInfo {
  title: string | undefined
  key: number | undefined
  code: string | undefined
  type: number | undefined
  note: string | undefined
  status: number | undefined
}

const Dep: React.FC = () => {

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

  const useStyles = createStyles(({ token }) => {
    return {
      container: {
        height: '500px',
        fontSize: '14px',
        titleHeight: 50
      },
    };
  });
  const { styles } = useStyles();

  const { Option } = Select;

  const [form] = useForm();


  //使用数据流获取全局dep数据，并传给tree
  const depModel = useModel('depModel')
  const { dep, depinfo, setDepinfo } = depModel
  const treeData: TreeDataNode[] | undefined = dep

  //选择数触发的事件

  const onSelect: TreeProps['onSelect'] = (_, info) => {
    const { title, key, code, type, note, status } = info.selectedNodes[0] as SelectdInfo
    setDepinfo(depinfo)
    form.setFieldsValue({
      'depname': title,
      'depid': key,
      'depcode': code,
      'type': type,
      'note': note,
      'status': status
    })
  };



  //获取子组件，组要想通过函数改变子组件得props
  const [dispaly, setDisplay] = useState<boolean>(true)

  const [newdep, setNewdep] = useState(false)

  const createDep = () => {
    setNewdep(true)
  }

  const editDep = () => {
    setDisplay(!dispaly)
  }

  const delDep = () => {
    console.log('@@')
  }

  const save = (values: any): any => {
    const data = form.getFieldsValue()
    console.log('@@data --->', data)
  }


  return (
    <PageContainer >
      <div id='dept-body' style={{ height: '768px', width: '100%', }}>
        <div id='head' style={{ height: '10%', width: '95%', marginBottom: '8px' }}>
          <Card id='head-content' style={{ height: '100%', width: '100%', }} >
            <Button type="primary" onClick={createDep} style={{ marginLeft: '15px' }}>新增部门</Button>
            <Button type="primary" onClick={editDep} style={{ marginLeft: '15px' }}>编辑部门</Button>
            <Button type="primary" onClick={delDep} style={{ marginLeft: '15px' }}>作废部门</Button>
            <Button type="primary" onClick={save} style={{ marginLeft: '15px' }}>保存更改</Button>
          </Card>
        </div>
        <div id='content' style={{ display: 'flex', justifyContent: 'space-between', height: '80%', width: '95%' }} >
          <Card id='content-right' style={{ height: '100%', width: '21%' }}>
            <Tree
              switcherIcon={<DownOutlined />}
              defaultExpandedKeys={['1', '2']}
              defaultSelectedKeys={['1']}
              onSelect={onSelect}
              showLine={true}
              treeData={treeData}
              className={styles.container}
              height={568}
            />
          </Card>
          <Card id='content-left' style={{ height: '100%', width: '78%', alignItems: 'center' }}>
            <div id='modal' style={{ height: '100%', width: '68%' }}>

              {/* 这里直接引入新建部门组件 */}
              <DepDetail {...{newdep ,setNewdep}} />

            </div>
            <div id='content-left-title' style={{ marginBottom: '32px', fontSize: '24px', textAlign: 'center' }}>{depinfo?.title}</div>
            <div id='content-left-detail' style={{ width: '100%', textAlign: 'center' }}>
              <Form
                {...formItemLayout}
                form={form}
                name="editdep"
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
                  <Input defaultValue={depinfo?.title} />
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

                {/* <Form.Item style={itemStyle} >
                  <Button type="primary" htmlType="submit">
                    保存
                  </Button>
                </Form.Item> */}
              </Form>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>

  )
}
export default Dep;