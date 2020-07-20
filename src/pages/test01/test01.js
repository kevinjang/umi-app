import { Button, notification } from 'antd'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc'
import { Link } from 'umi'

function Test01({ breadcrumbs }) {
    // console.log(breadcrumbs)
    return <div>
        <div>
            Test 01
        <Button onClick={() => {
                notification.open({
                    message: 'guess what',
                    description: 'new description',
                    onClick() {
                        console.log('Notification clicked!')
                    }
                })
            }}>
                Button O
        </Button>
        </div>
        <div>
            <Link to="/">Home</Link>
        </div>
    </div>
}

export default withBreadcrumbs()(Test01)