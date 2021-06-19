import React, { FC, useEffect, useState } from 'react'
import {Header} from '../../component/Header'
//必须引入的核心，换成require也是一样的。注意：recorder-core会自动往window下挂载名称为Recorder对象，全局可调用window.Recorder，也许可自行调整相关源码清除全局污染
import Recorder from 'recorder-core'

//需要使用到的音频格式编码引擎的js文件统统加载进来
import 'recorder-core/src/engine/mp3'
import 'recorder-core/src/engine/mp3-engine'

//以上三个也可以合并使用压缩好的recorder.xxx.min.js
//比如 import Recorder from 'recorder-core/recorder.mp3.min' //已包含recorder-core和mp3格式支持

//可选的扩展支持项
import 'recorder-core/src/extensions/waveview'

const Home: FC = () => {
  const [imgArray, setImgArray] = useState(['remChild.jpg', 'aimiliya.jpg', 'rem1.jpg', '486.png']);
  useEffect(() => {
    let timer: number = setInterval(() => {
      let arr: string[] = imgArray;
      arr.push(arr.shift() as string);
      setImgArray([...arr]);
    }, 10000)
    return () => clearInterval(timer)
  },[])
  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.background}>
        <div className={styles.backgroundList}>
          {imgArray.map((item, index) => 
            <img key={index} className={index === imgArray.length - 1? styles.backgroundItemCur : styles.backgroundItem} src={import.meta.env.VITE_IMG_PATH + item} alt=''/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home