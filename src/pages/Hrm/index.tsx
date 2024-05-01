import React, { useEffect, useState } from 'react'
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Button, Card, Input, List, Pagination, PaginationProps, Skeleton, Tag, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { getUserBydepId, getUserCountByDepId } from '@/services/hrm/api'
import avatar from '../../../public/avatar/useravatar.png'
import UserCreater from '@/components/UserComponent/Creater';
import Editor from '@/components/UserComponent/Editor';
import Operator from '@/components/UserComponent/Operator';
import More from '@/components/UserComponent/More';

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


const Hrm = () => {

  //1.拿到数据流中的users信息
  const { depids } = useModel('depModel')


  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState<number>(1);
  const [userList, setUserList] = useState<User[]>([])
  const [selectdeps, setSelectdeps] = useState<string>('')
  const [newUser, setNewUser] = useState(false)

  const onChange: PaginationProps['onChange'] = async (page) => {
    setCurrent(page);
    console.log('@@depids --->', depids)
    const { data } = await getUserBydepId(selectdeps, page)
    setUserList(data)
  };

  //使用数据流获取全局dep数据，并传给tree
  const depModel = useModel('depModel')
  const { dep } = depModel
  const treeData: TreeDataNode[] | undefined = dep

  //先获取数据流中得人员数据
  const userModel = useModel('userModel')
  const { users } = userModel
  //选择数触发的事件
  const onSelect: TreeProps['onSelect'] = async (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    const { children, key } = info.node
    const cKeys = children ? children.map(item => item.key) : []
    const deps = [key, ...cKeys].join(',')
    const res = await getUserCountByDepId(deps)
    setCount(res.data)
    try {
      const { data } = await getUserBydepId(deps, 1)
      setSelectdeps(deps)
      setCurrent(1)
      setUserList(data)
    } catch (error) {
      console.log('@@Hrm -> getUserBydepId error --->', error)
    }
  }

  useEffect(() => {
    setUserList(users)
  }, [])

  const createUser = () => {
    setNewUser(true)
  }


  const delUser = () => { }

  const saveUser = () => { }


  return (
    <PageContainer >
      <div id='dept-body' style={{ height: '768px', width: '100%', }}>
        <div id='head' style={{ height: '10%', width: '95%', marginBottom: '8px' }}>
          <Card id='head-content' style={{ height: '100%', width: '100%', }} >
            <Button type="primary" onClick={createUser} style={{ marginLeft: '15px' }}>新增人员</Button>
            <Input style={{ height: '80%', width: '15%', marginLeft: '20px' }}></Input>
            <Button type="primary" onClick={saveUser} style={{ marginLeft: '15px' }}>查找</Button>
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
                dataSource={userList.slice(0, 10)}
                renderItem={(item) => {
                  return (<List.Item style={{ height: '100%' }}
                    actions={[<Editor {...item}/>, <Operator  {...item}/>, <More />]}
                  >
                    <Skeleton avatar title={false} loading={userList ? false : true} active>
                      <List.Item.Meta
                        avatar={<Avatar src={avatar} />}
                        title={item.lastname}
                        description=""
                      />
                      <div> <Tag color="magenta">享有房补</Tag></div>
                      <div> <Tag color="magenta">享有餐补</Tag></div>
                      <div> <Tag color="magenta">享有13薪</Tag></div>
                      <div> <Tag color="magenta">技术岗</Tag></div>
                    </Skeleton>
                  </List.Item>)

                }}
              />
              <Pagination style={{ alignSelf: 'flex-end', marginTop: '15px' }} current={current} onChange={onChange} total={count} />
            </div>
          </Card>
        </div>
        <UserCreater {...{ newUser, setNewUser }} />
      </div>
    </PageContainer>
  )
}

export default Hrm
