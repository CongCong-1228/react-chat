import React from 'react';
import styles from './detail.module.less'
import avatar from '/images/avatar.png'
import arrowUp from '/images/arrowUp.png'

const Detail = () => {
    return (
        <div className={ styles.detail }>
            <div className={styles.user}>
                <img src={avatar} alt=""/>
                <h2>杨郁郁</h2>
                <p>I like Cong Cong</p>
            </div>
            <div className={styles.info}>
                <div className={styles.option}>
                    <div className={styles.title}>
                        <span>Chat Settings</span>
                        <img src={arrowUp} alt=""/>
                    </div>
                </div>
                <div className={styles.option}>
                    <div className={styles.title}>
                        <span>Chat Settings</span>
                        <img src={arrowUp} alt=""/>
                    </div>
                </div>
                <div className={styles.option}>
                    <div className={styles.title}>
                        <span>Chat Settings</span>
                        <img src={arrowUp} alt=""/>
                    </div>
                </div>
                <div className={styles.option}>
                    <div className={styles.title}>
                        <span>Chat Settings</span>
                        <img src={arrowUp} alt=""/>
                    </div>
                </div>
                <div className={styles.option}>
                    <div className={styles.title}>
                        <span>Chat Settings</span>
                        <img src={arrowUp} alt=""/>
                    </div>
                </div>
                <button>Block User</button>
                <button className={styles.logout}>Logout</button>
            </div>
        </div>
    );
};

export default Detail;
