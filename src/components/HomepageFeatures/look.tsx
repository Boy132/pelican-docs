import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useColorMode } from '@docusaurus/theme-common';

type FeatureItem = {
  title: string;
  light: string;
  dark: string
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Client Area',
    light: 'img/homepage/ss/serverconsoled.gif',
    dark: 'img/homepage/ss/serverconsolel.gif'  },
  {
    title: 'Panel Settings',
    light: 'img/homepage/ss/panelsettingsd.gif',
    dark: 'img/homepage/ss/panelsettingsl.gif'  },
  {
    title: 'Create Server',
    light: 'img/homepage/ss/createserverd.gif',
    dark: 'img/homepage/ss/createserverl.gif'  },
];

function Feature({title, light, dark}: FeatureItem) {
  const {colorMode} = useColorMode();
  let image: string;

  if (colorMode === 'dark') {
    image = light;
  } else {
    image = dark;
  }
  
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center" style={{paddingBottom: '20px'}}>
          <Zoom><img src={image}/></Zoom>
          <Heading as="h3">{title}</Heading>
        </div>
      </div>
    );
  }

export default function HomepageLook(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
      <h1 style={{textAlign: 'center'}}>Shots of the Screen</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

