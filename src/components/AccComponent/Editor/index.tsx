import { Avatar, Button, Card, Input, List, Modal, Skeleton, } from 'antd'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'


interface ChooseSate {
    access:number
    searched: boolean
    setSearched: Dispatch<SetStateAction<boolean>>
}

interface User {
    id?: number
    lastname?: string
    workcode?: string
}

const Editor = (props: ChooseSate) => {

    const workcode = useRef<any>(null)

    //Card组件的Meta
    const { Meta } = Card;
    //获取从props里的方法来控制该modal组件是否打开
    const {access ,searched, setSearched, } = props
    const onCancel = () => {
        setSearched(false)
    }

    const getUserByWorkcode = () => {
        //todo 这里需要加入通过workcod获取用户的代码
        console.log('@@access --->', access)
        if(workcode.current){
            console.log('@@workcode --->', workcode.current.input.value)
        }
    }

    const onOk = () => {
        //todo 这里需要加入通过获取到的人员加入到管理列表的方法
        return new Promise<boolean>(() => { })
    };

    return (
        <>
            <Modal
                title="增加人员"
                style={{ height: '100%', width: '100%' }}
                open={searched}
                onOk={onOk}
                destroyOnClose={true}
                onCancel={onCancel}
            >
                <div id='content'>
                    <Card id='content-detail' style={{ height: '100%', width: '100%', alignItems: 'center' }}>
                        <div style={{ height: '30%', width: '100%', display: 'flex', flexDirection: 'row' }}>
                            <Input style={{ height: '17%', width: '100%' }} placeholder='请输入工号' ref={workcode}/>
                            <Button style={{ marginLeft: '15px' }} onClick={getUserByWorkcode}>搜索</Button>
                        </div>
                        <Skeleton loading={true} avatar active>
                            <Card title="name" bordered={false} style={{ width: 300 }} >
                                <Meta
                                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        </Skeleton>
                    </Card>
                </div>
            </Modal>
        </>
    )
}

export default Editor
