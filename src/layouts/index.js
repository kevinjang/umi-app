import styles from './index.css';
import { useState } from 'react'
import { Link } from 'umi'
import { Layout, Breadcrumb, Drawer, Button, notification } from 'antd'
const { Sider, Header, Content, Footer } = Layout
// import { routes } from '../../.umirc'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc'

import { CloseOutlined, SettingOutlined } from '@ant-design/icons'

import CustomedMenu from '../pages/menus/index'
const drawerSetWidth = 272;

function BasicLayout(props) {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [drawerWidth, setDrawerWidth] = useState(drawerSetWidth)
  // const url = props.match.url;

  // const routes = getRoutes(url)

  // const Result = withBreadcrumbs(routes)(({ breadcrumbs }) => {

  // })

  // return <Result />;
  const breadcrumbs = props.breadcrumbs;
  console.log('major layout index breadcrumbs:', breadcrumbs)

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider width={drawerWidth} style={{ display: drawerOpen ? 'block' : 'none' }} >
        <Drawer closable={true} width={drawerWidth} visible={drawerOpen} maskClosable={true} mask={true} maskStyle={{ opacity: 0 }} placement="left" bodyStyle={{ marginTop: '20px' }}
          onClose={() => {
            setDrawerOpen(false)
            setDrawerWidth(0)
          }}
          closeIcon={<CloseOutlined />}
          footer={<SettingOutlined onClick={()=>{
            notification.open({
              message: 'Menu Settings',
              description: 'Allow users to change the settings of their Menus Preferences'
            })
          }}>

          </SettingOutlined>}
        >
          <CustomedMenu />
        </Drawer>
      </Sider>
      {console.log(window.innerWidth)}
      <Layout style={{ width: `${window.innerWidth - drawerWidth}px` }}>
        <Header style={{ width: '100%', color: 'white', fontSize: '1.5rem' }}>
          KSNL
          <Button style={{ float: 'right' }} onClick={() => {
            setDrawerOpen(true)
            setDrawerWidth(drawerSetWidth)
          }}>Open Drawer</Button>
        </Header>
        <div>
          <Breadcrumb style={{ padding: '10px' }}>
            {breadcrumbs.map((bc, index) => {
              console.log('bc:', bc.key.split('/'))
              const bcs = bc.key.split('/');
              const text = bcs[bcs.length - 1]
              return <Breadcrumb.Item key={"bc_" + index}>
                <Link to={bc.key}>{text === '' ? '首页' : text}</Link>
              </Breadcrumb.Item>
            })
            }
          </Breadcrumb>
        </div>
        <Content style={{ backgroundColor: '#ffa39e' }}>
          Root Layout
          {props.children}
        </Content>
        <Footer color="#1890ff" style={{ backgroundColor: '#1890ff' }}>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default withBreadcrumbs()(BasicLayout);
