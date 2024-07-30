import React from 'react';
import styles from './detail.module.less'
import avatar from '/images/avatar.png'

const Detail = () => {
    return (
        <div className={ styles.detail }>
            <div className={styles.user}>
                <img src={avatar} alt=""/>
                <h2>杨郁郁</h2>
                <p>I like Cong Cong</p>
            </div>
        </div>
    );
};

export default Detail;
