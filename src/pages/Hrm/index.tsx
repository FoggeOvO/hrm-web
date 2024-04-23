import React, { useEffect, useState } from 'react'
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Button, Card, List, Pagination, PaginationProps, Skeleton, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { createStyles } from 'antd-style';
import avatar from '../../../public/avatar/useravatar.png'
import { PaginationAlign } from 'antd/es/pagination/Pagination';

interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const count = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;


const Hrm = () => {

  const [list, setList] = useState<DataType[]>([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setList(res.results);
      });
  }, []);

  console.log('@@', list)

  const [current, setCurrent] = useState(3);
  const [align, setAlign] = useState<PaginationAlign>('end');

  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page);
    setCurrent(page);
  };

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
  const createUser = () => { }

  const editUser = () => { }

  const delUser = () => { }

  const saveUser = () => { }


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
              // className={styles.container}
              height={568} //这里可以控制组件大小，用以生成滚动条
            />
          </Card>
          <Card id='content-left' style={{ height: '100%', width: '78%' }}>
            <div style={{ height: '568px', width: '100%', display: 'flex', flexDirection: 'column' }}>
              <List
                style={{ height: '100%', width: '100%', overflowY: 'scroll' }}
                itemLayout="horizontal"
                dataSource={list.slice(0, 10)}
                renderItem={(item) => (
                  <List.Item style={{ height: '100%' }}
                    actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                  >
                    <Skeleton avatar title={false} loading={item.loading} active>
                      <List.Item.Meta
                        avatar={<Avatar src={avatar} />}
                        title={'this is a test'}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                      <div>content</div>
                    </Skeleton>
                  </List.Item>
                )}
              />
              <Pagination style={{ alignSelf: 'flex-end', marginTop: '15px' }} current={current} onChange={onChange} total={50} />
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  )
}

export default Hrm
