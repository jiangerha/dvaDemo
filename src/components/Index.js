import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Sider from './Sider';
import { Menu, Icon } from 'antd';
import styles from '../css/index.css';
const SubMenu = Menu.SubMenu;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'dora'
        };
    }

    render() {
        return (
            <div id="container" className={styles.container}>
                <Sider />
                <div id="rightWrap" className={styles.rightWrap}>
                    <Menu mode="horizontal">
                        <SubMenu style={{float:'right'}} title={<span><Icon type="user" />{ this.state.username }</span>}>
                            <Menu.Item key="setting:1">退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                    <div className={styles.rightBox}>
                        {this.props.children}
                    </div>
                </div> 
            </div>
        );
    }
}

export default App;