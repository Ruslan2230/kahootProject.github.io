import * as React from 'react';
import styles from './Button.module.sass';

class Button extends React.Component{
    render() {
        return(
            <div className={styles.button}>button</div>
        );
    }
}

export default Button;