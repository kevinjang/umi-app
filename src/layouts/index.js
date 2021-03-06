import styles from './index.css';
import { useState } from 'react'
import { connect } from 'dva'
import { Link } from 'umi'
import { Layout, Breadcrumb, Drawer, Button, notification, Row, Col, Divider } from 'antd'

import withBreadcrumbs from 'react-router-breadcrumbs-hoc'
import { CloseOutlined, SettingOutlined, CopyrightOutlined, ArrowRightOutlined, ArrowLeftOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import CustomedMenu from '../pages/menus/index'
import CustomedFooter from '../pages/menus/drawer-footer'

import RightContent from '../components/GlobalHeader/RightContent'

const { Sider, Header, Content, Footer } = Layout
const drawerOpenWidth = 200;

const drawerFoldWidth = 100;

function BasicLayout(props) {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [drawerWidth, setDrawerWidth] = useState(drawerOpenWidth)
  const breadcrumbs = props.breadcrumbs;

  return (
    <Layout className={styles.layoutBg}>
      <Sider width={drawerWidth} collapsed={!drawerOpen} reverseArrow={true} theme={"dark"}>
        {/* style={{ display: drawerOpen ? 'block' : 'none' }}  */}

        <div className={`${styles.logoMain} ${drawerOpen ? styles.unfold : styles.fold}`} >
          LOGO HERE
        </div>
        <CustomedMenu />
        <Row style={{ backgroundColor: 'inherit', height: '30px', width: '100%', position: 'absolute', bottom: '0px', borderTop: '1px solid black' }}>

          <Button theme="dark" onClick={() => {
            setDrawerOpen(!drawerOpen)
          }}>{drawerOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}</Button>
        </Row>
      </Sider>
      <Layout style={{ width: `${window.innerWidth - drawerWidth}px` }}>
        <Header className={styles.headerBg} theme="light">
          KSNL
          {/* <Button style={{ float: 'right' }} onClick={() => {
            setDrawerOpen(!drawerOpen)
          }}>Toggle Menu</Button> */}
          <RightContent />
        </Header>
        <div>
          <Breadcrumb className={styles.breadcrumb}>
            {breadcrumbs.map((bc, index) => {
              const bcs = bc.key.split('/');
              const text = bcs[bcs.length - 1]
              return <Breadcrumb.Item key={"bc_" + index}>
                <Link to={bc.key}>{text === '' ? '首页' : text}</Link>
              </Breadcrumb.Item>
            })
            }
          </Breadcrumb>
        </div>
        <Content className={styles.contentBg}>
          {/* Root Layout */}
          {props.children}
        </Content>
        <Footer className={styles.footerMain} ><CopyrightOutlined />KEVIN JANG 2020</Footer>
      </Layout>
    </Layout>
  );
}
export default connect(({ global}) => ({//, settings 
  collapsed: global.collapsed,
  // settings,
}))(withBreadcrumbs()(BasicLayout));
