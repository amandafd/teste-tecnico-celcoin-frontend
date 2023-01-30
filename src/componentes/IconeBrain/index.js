import React from 'react';
import styles from './IconeBrain.module.css';
import { Icon } from '@iconify/react';


function IconeBrain(props) {
    return (
        <span>
            <svg className={styles.gradientBrain}>
                <defs>
                    <linearGradient id="gradientB" x1="0.14" y1="0.15" x2="0.86" y2="0.85">
                    <stop offset="0%"   stop-color="rgba(0, 148, 255, 1)"/>
                    <stop offset="100%" stop-color="rgba(0, 255, 163, 1)"/>
                    </linearGradient>
                </defs>
            </svg>
            <div className={styles.iconeBrain}>
            <Icon icon="uil:brain" width={props.width}/>
            </div>
        </span>
    )
}

export default IconeBrain;