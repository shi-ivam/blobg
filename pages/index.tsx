import Head from 'next/head';
import styles from '../styles/Style.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deblofer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Deblofer</h1>
        <ul className={styles.navBarUL}>
          <li className={styles.navBarULListItem}>
            <a href="/auth">Join/Login</a>
          </li>
          <li className={styles.navBarULListItem}>
            <a href="/topics">Topic</a>
          </li>
        </ul>
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
              <div className={styles.secImageWrapWrap}>
                <div className={styles.innerSecChStoryImageWrap}>
                  <img className={styles.secStoryImg} src="/firstpost.jpg"></img>
                </div>
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
              <div className={styles.secImageWrapWrap}>
                <div className={styles.innerSecChStoryImageWrap}>
                  <img className={styles.secStoryImg} src="/firstpost.jpg"></img>
                </div>
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
              <div className={styles.secImageWrapWrap}>
                <div className={styles.innerSecChStoryImageWrap}>
                  <img className={styles.secStoryImg} src="/firstpost.jpg"></img>
                </div>
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
              <div className={styles.secImageWrapWrap}>
                <div className={styles.innerSecChStoryImageWrap}>
                  <img className={styles.secStoryImg} src="/firstpost.jpg"></img>
                </div>
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
      <div className="divider">

      </div>
      <div className={styles.newPosts}>
        <div className="sectionTitle">
          new posts
        </div>
        <div className="newPostsPosts">
          <div className="post">
            <div className="topbar">
              <div className="content">
                <div className="image">
                  <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt=""/>
                </div>
                <div className="data">
                  <div className="name">
                    Shivam Kumar
                  </div>
                  <div className="date">
                    4 Months Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="postCon">
              <div className="title">
                CSS Grid Cheat Sheet Illustrated in 2021🎖️
              </div>
              <div className="tags">
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
              </div>
            </div>
            <div className="props">
              <div className="attri">
                <div className="hearts">
                  <p>800</p><div className="heart">Hearts</div>
                </div>
                <div className="hearts">
                  <p>224</p><div className="heart">Comments</div>
                </div>
              </div>
              <div className="actions">
                <div className="time">
                  5 Min Read
                </div>
                <div className="btn">
                  <button>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="topbar">
              <div className="content">
                <div className="image">
                  <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt=""/>
                </div>
                <div className="data">
                  <div className="name">
                    Shivam Kumar
                  </div>
                  <div className="date">
                    4 Months Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="postCon">
              <div className="title">
                CSS Grid Cheat Sheet Illustrated in 2021🎖️
              </div>
              <div className="tags">
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
              </div>
            </div>
            <div className="props">
              <div className="attri">
                <div className="hearts">
                  <p>800</p><div className="heart">Hearts</div>
                </div>
                <div className="hearts">
                  <p>224</p><div className="heart">Comments</div>
                </div>
              </div>
              <div className="actions">
                <div className="time">
                  5 Min Read
                </div>
                <div className="btn">
                  <button>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="topbar">
              <div className="content">
                <div className="image">
                  <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt=""/>
                </div>
                <div className="data">
                  <div className="name">
                    Shivam Kumar
                  </div>
                  <div className="date">
                    4 Months Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="postCon">
              <div className="title">
                CSS Grid Cheat Sheet Illustrated in 2021🎖️
              </div>
              <div className="tags">
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
              </div>
            </div>
            <div className="props">
              <div className="attri">
                <div className="hearts">
                  <p>800</p><div className="heart">Hearts</div>
                </div>
                <div className="hearts">
                  <p>224</p><div className="heart">Comments</div>
                </div>
              </div>
              <div className="actions">
                <div className="time">
                  5 Min Read
                </div>
                <div className="btn">
                  <button>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="topbar">
              <div className="content">
                <div className="image">
                  <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt=""/>
                </div>
                <div className="data">
                  <div className="name">
                    Shivam Kumar
                  </div>
                  <div className="date">
                    4 Months Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="postCon">
              <div className="title">
                CSS Grid Cheat Sheet Illustrated in 2021🎖️
              </div>
              <div className="tags">
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
              </div>
            </div>
            <div className="props">
              <div className="attri">
                <div className="hearts">
                  <p>800</p><div className="heart">Hearts</div>
                </div>
                <div className="hearts">
                  <p>224</p><div className="heart">Comments</div>
                </div>
              </div>
              <div className="actions">
                <div className="time">
                  5 Min Read
                </div>
                <div className="btn">
                  <button>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="topbar">
              <div className="content">
                <div className="image">
                  <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt=""/>
                </div>
                <div className="data">
                  <div className="name">
                    Shivam Kumar
                  </div>
                  <div className="date">
                    4 Months Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="postCon">
              <div className="title">
                CSS Grid Cheat Sheet Illustrated in 2021🎖️
              </div>
              <div className="tags">
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
              </div>
            </div>
            <div className="props">
              <div className="attri">
                <div className="hearts">
                  <p>800</p><div className="heart">Hearts</div>
                </div>
                <div className="hearts">
                  <p>224</p><div className="heart">Comments</div>
                </div>
              </div>
              <div className="actions">
                <div className="time">
                  5 Min Read
                </div>
                <div className="btn">
                  <button>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="topbar">
              <div className="content">
                <div className="image">
                  <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt=""/>
                </div>
                <div className="data">
                  <div className="name">
                    Shivam Kumar
                  </div>
                  <div className="date">
                    4 Months Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="postCon">
              <div className="title">
                CSS Grid Cheat Sheet Illustrated in 2021🎖️
              </div>
              <div className="tags">
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
              </div>
            </div>
            <div className="props">
              <div className="attri">
                <div className="hearts">
                  <p>800</p><div className="heart">Hearts</div>
                </div>
                <div className="hearts">
                  <p>224</p><div className="heart">Comments</div>
                </div>
              </div>
              <div className="actions">
                <div className="time">
                  5 Min Read
                </div>
                <div className="btn">
                  <button>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="topbar">
              <div className="content">
                <div className="image">
                  <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt=""/>
                </div>
                <div className="data">
                  <div className="name">
                    Shivam Kumar
                  </div>
                  <div className="date">
                    4 Months Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="postCon">
              <div className="title">
                CSS Grid Cheat Sheet Illustrated in 2021🎖️
              </div>
              <div className="tags">
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
              </div>
            </div>
            <div className="props">
              <div className="attri">
                <div className="hearts">
                  <p>800</p><div className="heart">Hearts</div>
                </div>
                <div className="hearts">
                  <p>224</p><div className="heart">Comments</div>
                </div>
              </div>
              <div className="actions">
                <div className="time">
                  5 Min Read
                </div>
                <div className="btn">
                  <button>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="topbar">
              <div className="content">
                <div className="image">
                  <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt=""/>
                </div>
                <div className="data">
                  <div className="name">
                    Shivam Kumar
                  </div>
                  <div className="date">
                    4 Months Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="postCon">
              <div className="title">
                CSS Grid Cheat Sheet Illustrated in 2021🎖️
              </div>
              <div className="tags">
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
              </div>
            </div>
            <div className="props">
              <div className="attri">
                <div className="hearts">
                  <p>800</p><div className="heart">Hearts</div>
                </div>
                <div className="hearts">
                  <p>224</p><div className="heart">Comments</div>
                </div>
              </div>
              <div className="actions">
                <div className="time">
                  5 Min Read
                </div>
                <div className="btn">
                  <button>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="topbar">
              <div className="content">
                <div className="image">
                  <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt=""/>
                </div>
                <div className="data">
                  <div className="name">
                    Shivam Kumar
                  </div>
                  <div className="date">
                    4 Months Ago
                  </div>
                </div>
              </div>
            </div>
            <div className="postCon">
              <div className="title">
                CSS Grid Cheat Sheet Illustrated in 2021🎖️
              </div>
              <div className="tags">
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
                <div className="tag"><div className="hash">#</div>React</div>
              </div>
            </div>
            <div className="props">
              <div className="attri">
                <div className="hearts">
                  <p>800</p><div className="heart">Hearts</div>
                </div>
                <div className="hearts">
                  <p>224</p><div className="heart">Comments</div>
                </div>
              </div>
              <div className="actions">
                <div className="time">
                  5 Min Read
                </div>
                <div className="btn">
                  <button>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  )
}
