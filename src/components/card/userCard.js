import { React, useState } from 'react'
import { Card, Col, Row, Modal, Input, Dropdown, Menu } from 'antd';
import userAvatar from '../../assets/avatar.png'
import './userCard.css'


const UserCard = () => {
    const data = [
        {
            id: 1,
            title: 'Title Goes Here'
        },
        {
            id: 2,
            title: 'Title Goes Here'
        },
        {
            id: 3,
            title: 'Title Goes Here'
        }
    ]
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="https://www.antgroup.com">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="https://www.aliyun.com">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );
    return (
        <div style={{ margin: 40, alignContent: 'center', alignItems: 'center' }}>
            <Modal width={450} bodyStyle={{backgroundColor:'#9fceee'}}  title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <p style={{ textAlign: 'center', fontSize:20 }}>Invite Team</p>
                </div>
                <div>
                    <Input id='modalInput' style={{paddingLeft:'10px', paddingTop:'10px', paddingBottom:'10px', backgroundColor:'#e6e7e8', color:'#606062'}} placeholder="Enter One or More Emails to Invite" />
                </div>
                <div style={{ border: '1px solid #e6e7e8', marginTop: 10, borderRadius:5, backgroundColor:'#e6e7e8' }}>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'10px', paddingRight:'10px', marginTop:'10px'}}>
                            <div>
                                <p style={{ color: '#606062' }} onClick={e => e.preventDefault()}>
                                    Assign Role To Invitees
                                </p>
                            </div>
                            <div>
                                <p style={{color:'#606062'}}>icon</p>
                            </div>
                        </div>

                    </Dropdown>
                </div>
                <div style={{marginTop:10}}>
                    <button style={{width:'100%',backgroundColor:'#3e4095',color:'white', fontWeight:'bold'}}>
                        <p style={{marginTop:'10px'}}>Submit</p>
                    </button>
                </div>
            </Modal>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
                <Col className="gutter-row" span={4}>
                    <div style={{ backgroundColor: '#00afef', width: '100%', alignContent: 'center', textAlign: 'center', padding: '10px', borderRadius: 25, height: '190px' }}>
                        <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <p onClick={() => showModal()} style={{ color: 'white', fontWeight: 'bold' }}>INVITE</p>
                        </div>
                    </div>
                </Col>
                {
                    data.map(v => (
                        <Col className="gutter-row" span={4}>
                            <div style={{ backgroundColor: '#00afef', width: '100%', alignContent: 'center', textAlign: 'center', padding: '10px', borderRadius: 25, height: '190px' }}>
                                <div>
                                    <img height={100} width={100} src={userAvatar} />
                                </div>
                                <div style={{ marginTop: 10 }}>
                                    <p>Title Goes Here</p>
                                </div>
                                <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                                    <p style={{ marginRight: 10, fontWeight: 'bold' }}>Edit</p>
                                    <p style={{ color: 'red', fontWeight: 'bold' }}>Delete</p>
                                </div>
                            </div>
                        </Col>
                    ))
                }


            </Row>
        </div>
    )
}

export default UserCard