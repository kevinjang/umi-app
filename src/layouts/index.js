import styles from './index.css';
import { Layout } from 'antd'
const { Sider, Header, Content, Footer } = Layout
// import { routes } from '../../.umirc'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc'

function BasicLayout(props) {
  const url = props.match.url;

  console.log(getRoutes(url))

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider style={{ width: '20vw' }}>

      </Sider>
      <Layout style={{ width: '80vw' }}>
        <Header style={{ width: '100%', color: 'white', fontSize: '1.5rem' }}>
          KSNL
        </Header>
        <Content style={{ backgroundColor: '#ffa39e' }}>
          Root Layout
          {props.children}
          {console.log(url)}
        </Content>
        <Footer color="#1890ff" style={{ backgroundColor: '#1890ff' }}>Footer</Footer>
      </Layout>
    </Layout>
  );
}

function getRoutes(url) {
  const urls = url.split('/');
  console.log('routes:', urls);

  return urls.map((url, index)=>{
    if(url === ''){
      if(index > 0){
        return {}
      }
      else{
        return {path: '/'+url, breadcrumb: url}
      }
    }
    else{
      return {path: '/'+url, breadcrumb: url}
    }
  })
}

export default BasicLayout;
