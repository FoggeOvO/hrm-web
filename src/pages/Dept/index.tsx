import React, { useEffect } from 'react'
import { PageContainer } from '@ant-design/pro-components';
import { Card, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import {convertTree} from './util'

const Dept: React.FC = () => {

  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const dep = useModel('depModel')
  // const treeData = convertTree()



  

  return (
    <PageContainer   >
      <div id='dept-body' style={{height:'768px',width:'100%',}}>
        <div id='head' style={{height:'10%' , width:'95%', marginBottom: '8px' }}>
          <Card id='head-content' style={{ height: '100%', width: '100%'}} ></Card>
        </div>
        <div id='content' style={{ display: 'flex', justifyContent: 'space-between', height: '80%' , width:'95%'}}>
          <Card id='content-right' style={{ height: '100%', width: '28%' }}>

            <Tree
              showLine
              switcherIcon={<DownOutlined />}
              defaultExpandedKeys={['0-0-0']}
              onSelect={onSelect}
              // treeData={treeData}
            />
          </Card>
          <Card id='content-left' style={{ height: '100%', width: '68%' }}>

          </Card>
        </div>

      </div>

    </PageContainer>

  )
}
export default Dept;