import React, { useState } from 'react'
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Button, Card, Checkbox, CheckboxProps, Flex, List, PaginationProps, Radio, RadioChangeEvent, Skeleton, Tree, TreeDataNode, TreeProps } from 'antd';
import { getUserByAccess } from '@/services/hrm/api'
import Pagination from 'antd/es/pagination/Pagination';
import avatar from '../../../public/avatar/useravatar.png'
import AddDepAuth from '@/components/AccComponent/Operator';
import Editor from '@/components/AccComponent/Editor';


interface DataType {
  id: number
  lastname: string
  workcode: string
  depid: number
}


const Acc = () => {

  const [list, setList] = useState<DataType[]>([]);
  const [count, setCount] = useState<number>()
  const [current, setCurrent] = useState(3);
  const [value, setValue] = useState(1);
  const [checklist, setChecklist] = useState<number[]>([])
  const [searched, setSearched] = useState(false);

  //需要加入一个state来存入每次选择的管理员角色，传递给Editor组件。用以添加新增用户
  const[access,setAccess] = useState<number>(0)

  const pageChange: PaginationProps['onChange'] = async (page) => {
    setCurrent(page);
    //Todo: 这里后台还没有做分页，需要加入分页！
  };

  const onChange = async (e: RadioChangeEvent) => {
    setAccess(e.target.value)
    const { data, count } = await getUserByAccess(e.target.value)
    setList(data)
    setCount(count)
    setValue(e.target.value);
  };

  const onChecked: CheckboxProps['onChange'] = (e) => {
    const id = Number(e.target.id)
    if (e.target.checked) {
      setChecklist(pre => [...pre, id])
    } else {
      setChecklist(pre => pre.filter(item => item !== id))
    }
  }

  const addAccess = () => {
    setSearched(true)
  }

  const delAccess = () => {
    //TODO 这里需要添加删除的请求
    console.log('@@checklist --->', checklist)
  }

  return (
    <PageContainer >
      <div id='dept-body' style={{ height: '768px', width: '100%', }}>
        <div id='head' style={{ height: '10%', width: '95%', marginBottom: '8px' }}>
          <Card id='head-content' style={{ height: '100%', width: '100%', }} >
            <Flex gap="middle" >
              <div>
                <Radio.Group onChange={onChange} value={value} >
                  <Radio value={2}>信息维护员</Radio>
                  <Radio value={3}>考勤计算员</Radio>
                  <Radio value={4}>薪酬计算员</Radio>
                  <Radio value={1}>超级管理员</Radio>
                </Radio.Group>
                <Button style={{ marginLeft: '20px' }} onClick={addAccess}>新增管理</Button>
                <Button style={{ marginLeft: '20px' }} danger ghost onClick={delAccess}>删除管理</Button>
              </div>
            </Flex>
          </Card>
        </div>
        <div id='content' style={{ display: 'flex', justifyContent: 'space-between', height: '80%', width: '95%' }}>
          <Card id='content-detail' style={{ height: '100%', width: '100%', alignItems: 'center' }}>
            <div style={{ height: '568px', width: '100%', display: 'flex', flexDirection: 'column' }}>
              <List
                style={{ height: '100%', width: '100%', overflowY: 'scroll' }}
                itemLayout="horizontal"
                dataSource={list.slice(0, 10)}
                renderItem={(item) => (
                  <List.Item style={{ height: '100%' }}
                    actions={[<AddDepAuth />]}
                  >
                    <Checkbox id={String(item.id)} onChange={onChecked} style={{ marginRight: '15px' }} />
                    <Skeleton avatar title={false} loading={list ? false : true} active>
                      <List.Item.Meta
                        avatar={<Avatar src={avatar} />}
                        title={item.lastname}
                        description=""
                      />
                    </Skeleton>
                  </List.Item>
                )}
              />
              <Pagination style={{ alignSelf: 'flex-end', marginTop: '15px' }} current={current} onChange={pageChange} total={count} />
            </div>
            <div id='content-modal-edit'>
              <Editor {...{access, searched, setSearched }} />
            </div>
          </Card>

        </div>
      </div>
    </PageContainer>

  )
}

export default Acc
