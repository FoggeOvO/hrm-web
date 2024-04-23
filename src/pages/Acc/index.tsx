import React, { useEffect, useState } from 'react'
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Button, Card, Flex, List, PaginationProps, Radio, RadioChangeEvent, Skeleton, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { createStyles } from 'antd-style';
import Pagination, { PaginationAlign } from 'antd/es/pagination/Pagination';
import avatar from '../../../public/avatar/useravatar.png'

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
  
  

const Acc = () => {
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
  

    
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
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
                        <Flex gap="middle" vertical>
                            <Radio.Group onChange={onChange} value={value}>
                                <Radio value={2}>信息维护员</Radio>
                                <Radio value={3}>考勤计算员</Radio>
                                <Radio value={4}>薪酬计算员</Radio>
                                <Radio value={1}>超级管理员</Radio>
                            </Radio.Group>
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
              <Pagination style={{ alignSelf: 'flex-end', marginTop: '15px' }} current={current}  total={50} />
            </div>
                    </Card>
                </div>
            </div>
        </PageContainer>

    )
}

export default Acc
