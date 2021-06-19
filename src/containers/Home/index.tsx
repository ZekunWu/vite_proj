import React, { FC, useEffect, useState } from 'react'
import {Header} from '../../component/Header'
import styles from './index.module.css'

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