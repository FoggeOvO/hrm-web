import React, { useEffect } from 'react'
import { PageContainer } from '@ant-design/pro-components';
import { Card, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';




const Dept: React.FC = () => {

  const depModel = useModel('depModel')
  console.log('@@dep1 --->', depModel)
  const {dep}  = depModel

  const treeData:API.DreeDataNode[] = [{title:'总部', key:1, children:[{title:'SSC', key:2, children:[{title:'人事部', key:3, children:[{title:'OA组', key:4, children:[]}, {title:'HRBP', key:5, children:[]}, {title:'签证组', key:6, children:[]}, {title:'薪酬组', key:7, children:[]}]}, {title:'行政部', key:8, children:[{title:'固定资产', key:9, children:[]}, {title:'办公室', key:10, children:[]}, {title:'宿舍', key:11, children:[]}]}, {title:'财务部', key:12, children:[]}, {title:'项目中心', key:13, children:[]}]}, {title:'HQ', key:14, children:[{title:'HQPMHR1', key:15, children:[]}, {title:'HQPMHR2', key:16, children:[]}, {title:'HQPMHR3', key:17, children:[]}, {title:'HQPMHR4', key:18, children:[]}, {title:'HQM-DF', key:19, children:[]}, {title:'HQGS', key:20, children:[]}, {title:'HQM-RE', key:21, children:[]}]}, {title:'GE', key:22, children:[]}, {title:'XC', key:23, children:[]}, {title:'XRD', key:24, children:[]}, {title:'资管结算', key:25, children:[]}]}]

  // const treeData:API.DreeDataNode | null   = dep || null


  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

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
              treeData={treeData}
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