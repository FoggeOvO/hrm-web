import React, { useState } from 'react'
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Flex, Radio, RadioChangeEvent, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { createStyles } from 'antd-style';

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
                    <Card id='content-left' style={{ height: '100%', width: '100%', alignItems: 'center' }}>

                        <div id='content-left-detail' style={{ width: '100%', textAlign: 'center' }}>

                        </div>
                    </Card>
                </div>
            </div>
        </PageContainer>

    )
}

export default Acc
