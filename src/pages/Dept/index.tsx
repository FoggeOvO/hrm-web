import React, { useState } from 'react'
import { ModalForm, PageContainer } from '@ant-design/pro-components';
import { Button, Card, Form, Input, Select, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { createStyles } from 'antd-style';
import DepDetail from '@/components/DepDetail';


const Dept: React.FC = () => {

  const useStyles = createStyles(({ token }) => {
    return {
      container: {
        height: '500px',
        fontSize: '14px',
        titleHeight: 50
      },
    };
  });

  //使用数据流获取全局dep数据，并传给tree
  const depModel = useModel('depModel')
  const { dep } = depModel
  const { styles } = useStyles();
  const treeData: TreeDataNode[] | undefined = dep

  //选择数触发的事件
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };


  const [newdep, setNewdep] = useState(false)

  const createDep = () => {
    setNewdep(true)
  }

  const [form] = Form.useForm();

  console.log('@@form --->', form)

  return (
    <PageContainer >
      <div id='dept-body' style={{ height: '768px', width: '100%', }}>
        <div id='head' style={{ height: '10%', width: '95%', marginBottom: '8px' }}>
          <Card id='head-content' style={{ height: '100%', width: '100%' }} >
            <Button onClick={createDep}>新增部门</Button>
          </Card>
        </div>
        <div id='content' style={{ display: 'flex', justifyContent: 'space-between', height: '80%', width: '95%' }}>
          <Card id='content-right' style={{ height: '100%', width: '28%' }}>
            <Tree
              showLine
              switcherIcon={<DownOutlined />}
              defaultExpandedKeys={['0-0-0']}
              onSelect={onSelect}
              treeData={treeData}
              className={styles.container}
              height={568}
            />
          </Card>
          <Card id='content-left' style={{ height: '100%', width: '68%', alignItems: 'center' }}>
            <div id='modal' style={{ height: '100%', width: '68%'}}>
              <ModalForm
                title="新建表单"
                
                autoFocusFirstInput
                style={{ height: '568px', width: '68%'}}
                open={newdep}
                modalProps={{
                  destroyOnClose: true,
                  onCancel: () => setNewdep(false),
                }}
              >
                <DepDetail saveButton={true} />
              </ModalForm>
            </div>
            <div id='content-left-title' style={{ marginBottom: '32px', fontSize: '24px', textAlign: 'center' }}>xxx部门</div>
            <div id='content-left-detail' style={{ width: '100%', textAlign: 'center' }}>
              <DepDetail saveButton={false}/>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>

  )
}
export default Dept;