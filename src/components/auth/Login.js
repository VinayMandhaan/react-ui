import { React } from 'react'
import { Row, Col, Input } from 'antd';
import Logo from '../../assets/logo.png'
import Image from '../../assets/login.jpeg'
import './Login.css'



const Login = () => {
    return (
        <div className='mainPage'>
            <Row>
                <Col xs={24} sm={12} span={12}>
                    <div className='leftContainer'>
                        <div className='logoContainer'>
                            <img src={Logo} />
                        </div>
                        <div className='inputContainer'>
                            <Input className='inputText' color='#929395' placeholder="Enter Username" />
                        </div>
                        <div className='inputContainer'>
                            <Input className='inputText' color='#929395' placeholder="Enter Password" />
                        </div>
                        <div className='inputContainer'>
                            <button className='buttonStyle'>Login</button>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} span={12}>
                    <div className='rightContainer'>
                        <img className='containerImg' src={Image} />
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default Login