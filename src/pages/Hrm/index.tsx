import React from 'react'
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { createStyles } from 'antd-style';

const Hrm = () => {
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
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    const { children, key } = info.node

    const cKeys = children ? children.map(item => item.key) : []
    const deps = [key, ...cKeys]
    console.log(deps)

  };
  const createUser = () => {}

  const editUser = () => {}
  
  const delUser = () => {}

  const saveUser = () => {}
  
  return (
    <PageContainer >
      <div id='dept-body' style={{ height: '768px', width: '100%', }}>
        <div id='head' style={{ height: '10%', width: '95%', marginBottom: '8px' }}>
          <Card id='head-content' style={{ height: '100%', width: '100%', }} >
            <Button type="primary" onClick={createUser} style={{ marginLeft: '15px' }}>新增人员</Button>
            <Button type="primary" onClick={editUser} style={{ marginLeft: '15px' }}>编辑人员</Button>
            <Button type="primary" onClick={delUser} style={{ marginLeft: '15px' }}>删除人员</Button>
            <Button type="primary" onClick={saveUser} style={{ marginLeft: '15px' }}>保存更改</Button>
          </Card>
        </div>
        <div id='content' style={{ display: 'flex', justifyContent: 'space-between', height: '80%', width: '95%' }}>
          <Card id='content-right' style={{ height: '100%', width: '21%' }}>
            <Tree
              showLine
              switcherIcon={<DownOutlined />}
              defaultExpandedKeys={['1', '2']}
              onSelect={onSelect}
              treeData={treeData}
              className={styles.container}
              height={568}
            />
          </Card>
          <Card id='content-left' style={{ height: '100%', width: '78%', alignItems: 'center' }}>

            <div id='content-left-detail' style={{ width: '100%', textAlign: 'center' }}>

            </div>
          </Card>
        </div>
      </div>
    </PageContainer>

  )
}

export default Hrm
