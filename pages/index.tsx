import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React, { ReactElement } from 'react';
import JSX from 'react'
import useWindowSize from '../hooks/useWindowSize';
import SocialMediaIconContainer from '../components/SocialMediaIconContainer';

export default function Home(): ReactElement {

  const windowSize = useWindowSize();
  const [logoSize, setLogoSize] = React.useState<number>(400); 

  const onButtonClick = () => {
    window.location.href = 'https://shop.akiralyhalott.hu'
  }

  React.useEffect(()=>{
      if(windowSize !== undefined){
        if( windowSize.width! < 643) {
          setLogoSize(300)
        } else {
          setLogoSize(400)
        }
      }
  }, [windowSize]);

  return (
    <div className={styles.container}>
      <div>
        <Image src="/logo.png" alt="Logo" width={logoSize} height={logoSize}/>
      </div>
      <p>Az oldal fejlesztés alatt áll...</p>
      <p>Látogass el addig a webshopunkra!</p>
      <button onClick={onButtonClick}>Webshop</button>
      {/* <SocialMediaIconContainer/> */}
    </div>
  )
}

