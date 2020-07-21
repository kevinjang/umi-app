import { Row, Col, Divider } from 'antd'
import { SettingOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { useState } from 'react'

const items = [{
    component: SettingOutlined
}]
export default function (props) {
    const width = 100 / items.length;
    const [drawerOpen, setDrawerOpen] = useState(props.drawerOpen)
    return (
        <Row style={{ width: '100%' }}>
            {items.map((item, index) => {
                const Component = item.component;
                return (
                    <>
                        <Col key={"col_" + index} style={{ width: `${width}%` }}>
                            <Component {...item.props} />
                        </Col>
                        <Divider key={"divider_" + index} type="vertical" />
                    </>
                )
            })}
            {/* <Col style={{width: '25%'}}>
                {
                    drawerOpen? <ArrowLeftOutlined />:<ArrowRightOutlined />
                }
            </Col> */}
        </Row>
    )
}