import Head from 'next/head';
import styles from '../styles/Style.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Blobg</h1>
      </div>
      <div className={styles.homeMain}>
        <div className={styles.homeMainCh}> 
          <div className={styles.homeMainChMainPostImage}>
            <img className={styles.fullWidthImage} src="/firstpost.jpg"></img>
          </div>
          <div className={styles.mainChInfo}>
            <h3 className={styles.mainChInfoTitle}>Top Places to Visit This Holiday Season</h3>
            <p className={styles.mainChInfoExtract}>As winter is around the corner, here's our top pick of places to visit in India this season. Auli, Uttarakhand. Facebook. Add. Nanital, Uttarakhand. Zoo. Add. Binsar, Uttarakhand. Facebook. Add. Manali, Himachal Pradesh. Facebook. Add. Shimla, Himachal Pradesh. Facebook
            </p>
          </div>
        </div>
        <div className={styles.homeMainCh}>
          <div className={styles.innerSecCh}>
            <div className={styles.innerSecChStory}>
              <div className={styles.innerSecChStoryImageWrap}>
              <img className={styles.secStoryImg} src="/firstpost.jpg"></img>
              </div>
              <div className={styles.SecChStoryInfo}>
                <h1 className={styles.secStoryTitle}>
                  Best Places to Visit
                </h1>
                <p className={styles.secStoryExtract}>As winter is around the corner, here's our top pick of places to visit in India this season.
                </p>
              </div>
            </div>
            <div className={styles.innerSecChStory}>
              <div className={styles.innerSecChStoryImageWrap}>
              <img className={styles.secStoryImg} src="/firstpost.jpg"></img>
              </div>
              <div className={styles.SecChStoryInfo}>
                <h1 className={styles.secStoryTitle}>
                  Best Places to Visit
                </h1>
                <p className={styles.secStoryExtract}>As winter is around the corner, here's our top pick of places to visit in India this season.
                </p>
              </div>
            </div>
            <div className={styles.innerSecChStory}>
              <div className={styles.innerSecChStoryImageWrap}>
              <img className={styles.secStoryImg} src="/firstpost.jpg"></img>
              </div>
              <div className={styles.SecChStoryInfo}>
                <h1 className={styles.secStoryTitle}>
                  Best Places to Visit
                </h1>
                <p className={styles.secStoryExtract}>As winter is around the corner, here's our top pick of places to visit in India this season.
                </p>
              </div>
            </div>
            <div className={styles.innerSecChStory}>
              <div className={styles.innerSecChStoryImageWrap}>
              <img className={styles.secStoryImg} src="/firstpost.jpg"></img>
              </div>
              <div className={styles.SecChStoryInfo}>
                <h1 className={styles.secStoryTitle}>
                  Best Places to Visit
                </h1>
                <p className={styles.secStoryExtract}>As winter is around the corner, here's our top pick of places to visit in India this season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
