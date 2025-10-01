import { FunctionComponent, useCallback } from 'react';
import styles from './Post.module.css';
import { useNavigate } from "react-router-dom";
import React from 'react';

const Posts:FunctionComponent = () => {
    const navigate = useNavigate();
  	const onPostTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.post}>
      			<div className={styles.container}>
        				<div className={styles.background} />
        				<b className={styles.createPost}>Create Post</b>
        				<div className={styles.post2} onClick={onPostTextClick}>Post</div>
      			</div>
      			<img className={styles.lixIcon} src="/glowmom/icons/backspace.png"alt="" onClick={() => navigate("/")} />
      			<div className={styles.mypancakeParent}>
        				<div className={styles.mypancake}>MyPancake</div>
        				<img className={styles.groupChild} 
						src="/glowmom/icons/user4.png" alt="" />
      			</div>
      			<div className={styles.whatsOnYour} onClick={onPostTextClick}>What’s on your mind?</div>
        				<div className={styles.image} />
        				<div className={styles.postChild} />
        				<img className={styles.postItem} src="/glowmom/icons/category.png"alt="" />
        				<div className={styles.category}>Category</div>
        				<img className={styles.licameraIcon}
						src="/glowmom/icons/camera.png"  alt="" />
        				<div className={styles.iphoneXsKeyboardsDefaul}>
          					<img className={styles.backgroundsKeyboardsGray} 
							src="/glowmom/icons/keyboard.png"alt="" />
          					
        				</div>
        				<div className={styles.postInner}/>
        				<div className={styles.rectangleDiv} onClick={onPostTextClick} />
        				<img className={styles.liimageMinusIcon} 
						src="/glowmom/icons/album.png" alt="" />
        				<div className={styles.statusBar}>
          					<img className={styles.frameIcon} 
							src="/glowmom/icons/status.png"
							alt="" />
          					<div className={styles.action}>
            						<div className={styles.time}>9:41</div>
          					</div>
        				</div>
        			</div>);
      			};
      			
      			export default Posts;
      			