import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// 引入Antd的导航组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Sider extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="leftMenu" >
                <Menu theme="dark"
                    style={{ width: 200,height: '100%' }}
                    defaultOpenKeys={['sub1', 'sub2']}
                    defaultSelectedKeys={[this.state.current]}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="bars" /><span>菜单</span></span>}>
                        <Menu.Item key="1"><Link to="/products" replace>products</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/list" replace>list</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/test1" replace>测试路由1</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/test2" >测试路由2</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Sider