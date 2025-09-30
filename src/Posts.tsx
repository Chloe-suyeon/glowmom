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
      			<img className={styles.lixIcon} src="/icons_post/li_x.svg"alt="" onClick={() => navigate("/")} />
      			<div className={styles.mypancakeParent}>
        				<div className={styles.mypancake}>MyPancake</div>
        				<img className={styles.groupChild} alt="" />
      			</div>
      			<div className={styles.whatsOnYour} onClick={onPostTextClick}>What’s on your mind?</div>
        				<div className={styles.image} />
        				<div className={styles.postChild} />
        				<img className={styles.postItem} alt="" />
        				<div className={styles.category}>Category</div>
        				<img className={styles.licameraIcon} alt="" />
        				<div className={styles.iphoneXsKeyboardsDefaul}>
          					<img className={styles.backgroundsKeyboardsGray} alt="" />
          					<div className={styles.keys}>
            						<div className={styles.symbols}>
              							<div className={styles.postBackground} />
              							<div className={styles.div}>123</div>
            						</div>
            						<div className={styles.space}>
              							<div className={styles.background2} />
              							<div className={styles.postSpace}>space</div>
            						</div>
            						<div className={styles.button}>
              							<div className={styles.background3} />
              							<div className={styles.label}>Label</div>
            						</div>
          					</div>
          					<img className={styles.emojiGlyphIcon} alt="" />
          					<img className={styles.dictationGlyphIcon} alt="" />
          					<div className={styles.firstRow}>
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<div className={styles.p}>P</div>
            						<div className={styles.o}>O</div>
            						<div className={styles.i}>I</div>
            						<div className={styles.u}>U</div>
            						<div className={styles.y}>Y</div>
            						<div className={styles.t}>T</div>
            						<div className={styles.r}>R</div>
            						<div className={styles.e}>E</div>
            						<div className={styles.w}>W</div>
            						<div className={styles.q}>Q</div>
          					</div>
          					<div className={styles.secondRow}>
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<div className={styles.l}>L</div>
            						<div className={styles.k}>K</div>
            						<div className={styles.j}>J</div>
            						<div className={styles.h}>H</div>
            						<div className={styles.g}>G</div>
            						<div className={styles.f}>F</div>
            						<div className={styles.d}>D</div>
            						<div className={styles.s}>S</div>
            						<div className={styles.a}>A</div>
          					</div>
          					<div className={styles.thirdRow}>
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.backgroundIcon} alt="" />
            						<img className={styles.keyboardsShift} alt="" />
            						<div className={styles.m}>M</div>
            						<div className={styles.n}>N</div>
            						<div className={styles.b}>B</div>
            						<div className={styles.v}>V</div>
            						<div className={styles.c}>C</div>
            						<div className={styles.x}>X</div>
            						<div className={styles.z}>Z</div>
            						<img className={styles.keyboardsDelete} alt="" />
          					</div>
        				</div>
        				<div className={styles.postInner} />
        				<div className={styles.rectangleDiv} onClick={onPostTextClick} />
        				<img className={styles.liimageMinusIcon} alt="" />
        				<div className={styles.statusBar}>
          					<img className={styles.frameIcon} alt="" />
          					<div className={styles.action}>
            						<div className={styles.time}>9:41</div>
          					</div>
        				</div>
        			</div>);
      			};
      			
      			export default Posts;
      			