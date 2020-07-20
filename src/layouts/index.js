import styles from './index.css';
import { useState } from 'react'
import { Link } from 'umi'
import { Layout, Breadcrumb, Drawer, Button } from 'antd'
const { Sider, Header, Content, Footer } = Layout
// import { routes } from '../../.umirc'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc'

function BasicLayout(props) {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [drawerWidth, setDrawerWidth] = useState(256)
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
        <Drawer width={drawerWidth} visible={drawerOpen} mask={false} placement="left"
          onClose={() => {
            setDrawerOpen(false)
            setDrawerWidth(0)
          }}></Drawer>
      </Sider>
      {console.log(window.innerWidth)}
      <Layout style={{width: `${window.innerWidth - drawerWidth}px`}}>
        <Header style={{ width: '100%', color: 'white', fontSize: '1.5rem' }}>
          KSNL
          <Button style={{ float: 'right' }} onClick={() => {
            setDrawerOpen(true)
            setDrawerWidth(256)
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
