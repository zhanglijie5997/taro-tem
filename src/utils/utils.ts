import { getSystemInfo } from "@tarojs/taro";
/** 是否IphoneX */
export const isIphoneX = async () => {
    const { windowHeight, windowWidth } = await getSystemInfo();
    return windowHeight / windowWidth > 16 / 9 
}