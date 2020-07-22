import styles from './index.css';
import { Link } from 'umi'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc'

function App1(props) {
  return (
    <div className={styles.normal}>
      {/* <div className={styles.welcome} /> */}
      {/* <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <Link to="/test01">test01</Link>
        </li>
      </ul> */}
    </div>
  );
}
export default withBreadcrumbs()(App1)