import styles from './index.css';
import { Link } from 'umi'
import { Layout, Breadcrumb } from 'antd'
const { Sider, Header, Content, Footer } = Layout
// import { routes } from '../../.umirc'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc'

function BasicLayout(props) {
  // const url = props.match.url;

  // const routes = getRoutes(url)

  // const Result = withBreadcrumbs(routes)(({ breadcrumbs }) => {

  // })

  // return <Result />;
  const breadcrumbs = props.breadcrumbs;
  console.log('major layout index breadcrumbs:', breadcrumbs)
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider style={{ width: '20vw' }}>

      </Sider>
      <Layout style={{ width: '80vw' }}>
        <Header style={{ width: '100%', color: 'white', fontSize: '1.5rem' }}>
          KSNL
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
