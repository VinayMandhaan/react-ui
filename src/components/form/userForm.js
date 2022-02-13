import { React, useState } from 'react'
import { Card, Col, Row, Modal, Input, Dropdown, Menu, Button } from 'antd';
import './userForm.css'


const UserForm = () => {
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
        <div>
            <div className='mainContainer'>
                <div className='inputContainer'>
                    <Input id='modalInput' className='formInput' placeholder="First Name" />
                </div>
                <div className='inputContainer'>
                    <Input id='modalInput' className='formInput' placeholder="Last Name" />
                </div>
            </div>
            <div className='mainContainer'>
                <div className='inputContainer'>
                    <Input id='modalInput' className='formInput' placeholder="Company" />
                </div>
                <div className='inputContainer'>
                    <Input id='modalInput' className='formInput' placeholder="Location" />
                </div>
            </div>
            <div className='mainContainer'>
                <div className='inputContainer'>
                    <Input id='modalInput' className='formInput' placeholder="Phone" />
                </div>
                <div className='inputContainer'>
                    <Input id='modalInput' className='formInput' placeholder="Email" />
                </div>
            </div>
            <div className='mainContainer'>
                <div className='inputContainer'>
                    <Input id='modalInput' className='formInput' placeholder="Total Invested" />
                </div>
                <div className='inputContainer'>
                <div className='dropDownInput'>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'2px', paddingRight:'10px',}}>
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
                </div>
            </div>
            <div className='mainContainer'>
                <div className='buttonContainer'>
                    <button className='formButton'>
                        <p className='buttonText'>Submit</p>
                    </button>
                </div>
            </div>

        </div>
    )
}


export default UserForm