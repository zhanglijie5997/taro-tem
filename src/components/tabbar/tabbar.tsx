import { Image, View } from '@tarojs/components';
import React from 'react';
import styles from "./tabbar.module.scss";
import home from "@static/images/heigshouye_9_12.9@2x.png";
import homeSelect from "@static/images/honghuiyuan_9_12.9@2x.png";
import { switchTab } from "@tarojs/taro";
import { useDispatch, useSelector } from 'react-redux';
import { changeActions, SelectType } from '@store/actions';
const tabList = [
    { 
        pagePath: '/pages/index/index',
        iconPath: home,
        selectedIconPath: homeSelect,
        text: '首页'
    },
    { 
        pagePath: '/pages/log/log',
        iconPath: home,
        selectedIconPath: homeSelect,
        text: '首页'
    }
];

const Tarbar = () => {
    // const [getSelect, setSelect] = useState<number>(0);
    const selector = useSelector((state: SelectType) => state.a);
    const dispatch = useDispatch();

    const changeSelectCallback = (i: number) => {
        dispatch(changeActions(i))
        switch (i) {
            case 0:
                switchTab({url: "/pages/index/index"});
                break;
            case 1:
                switchTab({ url: "/pages/log/log" })
                break;
            default:
                break;
        }
    }
    return (
        <View className={styles.tabbar}>
            {
                tabList.map((_, i: number) => <View key={i} className={styles.item} onClick={() => changeSelectCallback(i)}>
                    <Image  className={styles.i_img} src={selector === i ? _.selectedIconPath : _.iconPath} />
                    <View className={styles.i_text}>{ _.text }</View>
                </View>)
            }
        </View>
    );
}

export default Tarbar;
