import { Tooltip, Tag } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';

// import { connect, SelectLang } from 'umi'
import styles from './index.less'

const {REACT_APP_ENV} = process.env;

const ENVTagColor = {
    dev: 'orange',
    test: 'green',
    pre: '#87d068'
};

const GlobalHeaderRight = props => {
    const { theme, layout } = props;
    let className = styles.right;

    if (theme === 'dark' && layout === 'top') {
        className = `${styles.right} ${styles.dark}`
    }

    console.log(process.env);

    return (
        <div className={className}>
            <Tooltip title="使用文档" >
                <a
                    style={{ color: 'inherit', paddingTop: '13px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://pro.ant.design/docs/getting-started"
                    className={styles.action}
                >
                    <QuestionCircleOutlined />
                </a>
            </Tooltip>
            {REACT_APP_ENV && (
                <span>
                    <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
                </span>
            )}
            {/* <SelectLang className={styles.action} /> */}
        </div>
    )
}

export default GlobalHeaderRight