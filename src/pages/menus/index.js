import { Menu, Divider, Row, Col, Button } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined, PieChartOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Link } from 'umi'
const { SubMenu } = Menu;

export default function (props) {
    // console.log('inlineCollapsed:', inlineCollapsed)
    // const { inlineCollapsed, setDrawerOpenEx } = props

    // const [inlineCollapsed, setInlineCollapsed] = useState(inlineCollapsedX)
    return (
        <Menu {...props} onClick={(e) => {
            // console.log('click', e)
        }}
            theme={"dark"}
            style={{ width: '100%', height: 'calc(100% - 64px)' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode='inline'>
            <SubMenu key='sub1' title={
                <span>
                    <MailOutlined />
                    <span>Navigation One</span>
                </span>
            }>
                <Menu.ItemGroup key='g1' title='Item 1'>
                    <Menu.Item key="1">
                        <Link to="/test01">Option 1</Link>
                    </Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">
                        Option 3
                    </Menu.Item>
                    <Menu.Item key="4">
                        Option 4
                    </Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu
                key="sub4"
                title={
                    <span>
                        <SettingOutlined />
                        <span>Navigation Three</span>
                    </span>
                }
            >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
            {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
            </Menu.Item> */}
        </Menu>
    )
}