import { Button, notification } from 'antd'
export default function () {
    return <div>
        Test 01
        <Button onClick={()=>{
            notification.open({
                message: 'guess what',
                description: 'new description',
                onClick(){
                    console.log('Notification clicked!')
                }
            })
        }}>
            Button O
        </Button>
    </div>
}