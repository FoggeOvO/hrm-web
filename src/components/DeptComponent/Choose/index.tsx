import React, { Dispatch, SetStateAction, useState } from 'react'
import { Card, Modal, Tree, TreeDataNode, TreeProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { useForm } from 'antd/es/form/Form';

interface ChooseSate{
    searched:boolean
    setSearched:Dispatch<SetStateAction<boolean>>
    setNewdep:Dispatch<SetStateAction<{ key: number; title: string; } | {}>>
}
const Choose = (props:ChooseSate) => {

    const {searched, setSearched, setNewdep} = props

    //使用数据流获取全局dep数据，并传给tree
    const depModel = useModel('depModel')
    const { dep } = depModel
    const treeData: TreeDataNode[] | undefined = dep

    const [form] = useForm();

    const onOk = () => {
        const data = form.getFieldsValue();
        console.log('@@data --->', data)
        return new Promise<boolean>(()=>{})
    };

    const onCancel = () =>{
        setSearched(false) 
    }

    const onSelect: TreeProps['onSelect'] = async (selectedKeys, info) => {
        console.log('info--->' ,info);
        const {key, title} = info.node
        console.log('data --->', key)
        setNewdep({
            key : key as number,
            title: title as string,
        })
        onCancel()
      }

    return (
        <Modal
            title="新建人员"
            style={{ height: '100%', width: '100%' }}
            open={searched}
            onOk={onOk}
            destroyOnClose={true}
            onCancel={onCancel}
        >
            <Card id='content-right' style={{ height: '100%', width: '100%' }}>
                <Tree
                    showLine
                    switcherIcon={<DownOutlined />}
                    defaultExpandedKeys={['1', '2']}
                    onSelect={onSelect}
                    treeData={treeData}
                    // className={styles.container}
                    height={260} //这里可以控制组件大小，用以生成滚动条
                />
            </Card>
        </Modal>

    )
}

export default Choose
