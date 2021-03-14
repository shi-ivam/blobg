import Head from 'next/head';
import styles from '../styles/Style.module.css';
import jwt from 'jsonwebtoken';
import user from '../models/user.js';
import post from '../models/post.js';
import dbConnect from '../utils/dbConnect';


// Partial

import Header from '../components/Header.partial';
import Postcard from '../components/Postcard.partial';

export async function getServerSideProps(context) {
  // Default auth to false

  // check token and verify valid user
  if (!context.req.headers.cookie){
      return {
          props:{
              auth:false
          }
      }
  }
  else{
      const db = await dbConnect();
      console.log(context.req.headers.cookie.split('=')[1])
      const jwtUser = jwt.verify(context.req.headers.cookie.split('=')[1],process.env.JWTSECRET);
      const foundUser = await user.findOne({id:jwtUser.userId});
      if (foundUser){
          console.log(foundUser);
          

          // Get new Posts and top Posts
          var newdate = new Date();

          newdate.setDate(newdate.getDate() - 30); // minus the date
          
          const oneMonthAgo = new Date(newdate)
          

          const latestPosts = await post.find({dateCreated:{
            $gte:oneMonthAgo
          }})

          const topPosts = await post.find().sort({hearts:-1}).limit(8)


          return {
              props: {auth:true,latestPosts,topPosts}, // Will be passed to the page component as props
          }
      }
      else{

          return {
              props: {auth:false}, // Will be passed to the page component as props
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
          <Postcard />
        </div>
      </div>
      <div className="divider"></div>
      <div className="top-posts">
        <div className="sectionTitle">
          top posts
        </div>
        <div className="topPostsPosts">
          
          <Postcard/>
          
          
          
        
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
