import React from 'react';
import classNames from 'classnames';

import styles from './Wrapper.module.css';

const Wrapper = ({ children, center, style })=>
        <div
            className={classNames(styles.Wrapper, center && styles.center)}
            style={style}
        >
            {children}
        </div>
    

export default Wrapper;