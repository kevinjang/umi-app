import styles from './index.css';
import { useState } from 'react'
import { Link } from 'umi'
import { Layout, Breadcrumb, Drawer, Button, notification, Row, Col, Divider } from 'antd'

import withBreadcrumbs from 'react-router-breadcrumbs-hoc'
import { CloseOutlined, SettingOutlined, CopyrightOutlined, ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import CustomedMenu from '../pages/menus/index'
import CustomedFooter from '../pages/menus/drawer-footer'

const { Sider, Header, Content, Footer } = Layout
const drawerOpenWidth = 272;

const drawerFoldWidth = 100;

function BasicLayout(props) {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [drawerWidth, setDrawerWidth] = useState(drawerOpenWidth)
  const breadcrumbs = props.breadcrumbs;
  return (
    <Layout className={styles.layoutBg}>
      <Sider width={drawerWidth} >
      {/* style={{ display: drawerOpen ? 'block' : 'none' }}  */}
        <Drawer closable={false} width={drawerWidth} visible={true} maskClosable={true} mask={false} maskStyle={{ opacity: 0 }} placement="left" bodyStyle={{ marginTop: '20px' }}
          onClose={() => {
            setDrawerOpen(false)
            setDrawerWidth(drawerFoldWidth)
          }}
          closeIcon={<CloseOutlined />}
          footer={
            <CustomedFooter drawerOpen />
          }
        >
          <CustomedMenu inlineCollapsed={!drawerOpen} />
        </Drawer>
        <Button id="btnToggleDrawer" style={{ left: drawerWidth - 1, position: 'absolute' }} icon={
          drawerOpen ? <ArrowLeftOutlined /> : <ArrowRightOutlined />
        } onClick={() => {
          setDrawerOpen(!drawerOpen)
          // setDrawerWidth(drawerOpen? drawerFoldWidth:drawerOpenWidth)
        }}></Button>
      </Sider>
      <Layout style={{ width: `${window.innerWidth - drawerWidth}px` }}>
        <Header className={styles.headerBg}>
          KSNL
          <Button style={{ float: 'right' }} onClick={() => {
            setDrawerOpen(true)
            setDrawerWidth(drawerOpenWidth)
          }}>Open Drawer</Button>
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
          Root Layout
          {props.children}
        </Content>
        <Footer ><CopyrightOutlined />KEVIN JANG 2020</Footer>
      </Layout>
    </Layout>
  );
}

export default withBreadcrumbs()(BasicLayout);
