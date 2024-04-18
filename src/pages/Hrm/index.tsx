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
    console.log('selected', selectedKeys,info);
    const {children,key} = info.node 
    
    const cKeys = children?children.map(item => item.key):[]
    const deps = [key,...cKeys]
    console.log(deps)
  
  };

  return (
    <PageContainer >
      <div id='dept-body' style={{ height: '768px', width: '100%', }}>
        <div id='head' style={{ height: '10%', width: '95%', marginBottom: '8px' }}>
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
            
            <div id='content-left-title' style={{ marginBottom: '32px', fontSize: '24px', textAlign: 'center' }}>xxx部门</div>
            <div id='content-left-detail' style={{ width: '100%', textAlign: 'center' }}>
              
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>

  )
}

export default Hrm
