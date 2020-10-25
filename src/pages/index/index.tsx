import React, { memo, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { changeActions, SelectType } from '@store/actions';
import Tarbar from '@components/tabbar/tabbar';

const Index = (props) => {
  const selector = useSelector((state: SelectType) => state.a);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(changeActions(333))

    // console.log(selector, props,'，??!!fffff');
  }, [])
  return (<View className={styles.index}>
            <View><Text>Hello, World{ selector }</Text></View>
            <Tarbar />
          </View>)
}

export default memo(Index, (props, nextProps) => {
  console.log(props, nextProps);
  return true;
}) 

