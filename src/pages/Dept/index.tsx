import React, { useState } from 'react'
import { ModalForm, PageContainer } from '@ant-design/pro-components';
import { Button, Card, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { createStyles } from 'antd-style';
import DepDetail from '@/components/DepDetail';



interface SelectdInfo {
  title: string | undefined
  key: number | undefined
  code: string | undefined
  type: number | undefined
  note: string | undefined
}

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
  const { styles } = useStyles();
  //使用数据流获取全局dep数据，并传给tree
  const depModel = useModel('depModel')
  const { dep } = depModel
  const treeData: TreeDataNode[] | undefined = dep

  //选择数触发的事件
  const [selectdInfo, setSelectInfo] = useState<SelectdInfo>({ title: undefined, key: undefined, code: undefined, type: undefined, note: undefined });

  const onSelect: TreeProps['onSelect'] = (_, info) => {
    const selectdInfo = info.selectedNodes[0] as SelectdInfo
    setSelectInfo(selectdInfo)
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

  const save = (values:any):any => {
    values()
    console.log('@@save被点击了')
    console.log('@@values --->', values)
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
          <Card id='content-right' style={{ height: '100%', width: '28%' }}>
            <Tree
              switcherIcon={<DownOutlined />}
              defaultExpandedKeys={['1', '2']}
              onSelect={onSelect}
              showLine={true}
              treeData={treeData}
              className={styles.container}
              height={568}
            />
          </Card>
          <Card id='content-left' style={{ height: '100%', width: '68%', alignItems: 'center' }}>
            <div id='modal' style={{ height: '100%', width: '68%' }}>
              <ModalForm
                title="部门创建"

                autoFocusFirstInput
                style={{ height: '568px', width: '68%' }}
                open={newdep}
                modalProps={{
                  destroyOnClose: true,
                  onCancel: () => setNewdep(false),
                }}
              >
                <DepDetail {...{ dispaly: false ,save}} />
              </ModalForm>
            </div>
            <div id='content-left-title' style={{ marginBottom: '32px', fontSize: '24px', textAlign: 'center' }}>{selectdInfo.title}</div>
            <div id='content-left-detail' style={{ width: '100%', textAlign: 'center' }}>
              <DepDetail  {...{ dispaly, selectdInfo,save }} />
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>

  )
}
export default Dept;