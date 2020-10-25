import React from 'react';
import styles from "./log.module.scss";
import { View } from "@tarojs/components";
import Tarbar from '@components/tabbar/tabbar';
const log = (props) => {
    return (
        <View className={styles.log}>
            log
            <Tarbar ></Tarbar>
        </View>
    );
}

export default log;
