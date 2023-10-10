import Image from 'next/image'
import styles from './page.module.css'
import react from 'react'
import ImageGallery from './components/imagegallery'

//These imports are for the Material Design Library
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ImageGallery/>
      </main>
    </div>
  )
}
