import Head from 'next/head';
import styles from '../styles/Style.module.css';
import jwt from 'jsonwebtoken';
import user from '../models/user.js';
import Header from '../components/Header.partial';

export async function getServerSideProps(context) {
  // Default auth to false
  let auth = false;

  // check token and verify valid user
  if (!context.req.headers.cookie){
      return {
          props:{
              auth
          }
      }
  }
  else{
      console.log(context.req.headers.cookie.split('=')[1])
      const jwtUser = jwt.verify(context.req.headers.cookie.split('=')[1],process.env.JWTSECRET);
      const foundUser = await user.findOne({id:jwtUser.userId});
      if (foundUser){
          console.log(foundUser);
          auth = true;
          return {
              props: {auth}, // Will be passed to the page component as props
          }
      }
      else{

          return {
              props: {auth}, // Will be passed to the page component as props
          }
      }
  }

}

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deblofer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header auth={props.auth}/>
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
      <div className="new-posts">
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
        </div>
      </div>
      <div className="divider"></div>
      <div className="top-posts">
        <div className="sectionTitle">
          top posts
        </div>
        <div className="topPostsPosts">
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
          </div><div className="post">
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
          </div><div className="post">
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
      <div className="footer">
        <div className="main">
          made with {"<3"} by shivam kumar
        </div>
        <div className="sec">
          using Nextjs, Mongodb and Node
        </div>
      </div>
    </div>
  )
}
