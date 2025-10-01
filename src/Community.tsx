import { FunctionComponent, useCallback } from 'react';
import styles from './Community.module.css';
import React from 'react';
import { useNavigate } from "react-router-dom";


const Community:FunctionComponent = () => {

    const navigate = useNavigate();
  	
  	const onIconClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.community}>
      			<div className={styles.post}>
        				<span>{`I feel like I haven’t slept in days 😅 My 6-week-old cries every time I put her down in the crib. Is this.... `}</span>
        				<span className={styles.seeMore}>See more</span>
      			</div>
      			<div className={styles.communityPost}>
        				<span>{`I’m 20 weeks pregnant and missing my morning coffee so much ☕😩 Some friends say one cup a day is.... `}</span>
        				<b className={styles.communitySeeMore}>See more</b>
      			</div>
      			<div className={styles.post2}>
        				<span>{`My 4-year-old loves cartoons, but I’m worried I let him watch too much. What’s your daily screen.... `}</span>
        				<b className={styles.communitySeeMore}>See more</b>
      			</div>
      			<div className={styles.tag}>#Infant</div>
      			<div className={styles.communityTag}>#Prenatal</div>
      			<div className={styles.tag2}>#Preschool</div>
      			<div className={styles.username}>MamaBear</div>
      			<div className={styles.communityUsername}>TinyGiggles</div>
      			<div className={styles.username2}>Happymama</div>
      			<div className={styles.timestamp}>1 minute ago</div>
      			<div className={styles.communityTimestamp}>10 minute ago</div>
      			<div className={styles.timestamp2}>10 minute ago</div>
      			<div className={styles.comments}>20 comments</div>
      			<div className={styles.communityComments}>24 comments</div>
      			<div className={styles.comments2}>10 comments</div>
      			<div className={styles.views}>101 views</div>
      			<div className={styles.communityViews}>101 views</div>
      			<div className={styles.views2}>101 views</div>
      			<img className={styles.communityChild} src="/glowmom/icons/communityChild.png" alt="" />
      			<img className={styles.communityItem} 
				src="/glowmom/icons/expert_b.png" 
				alt="" />
      			<img className={styles.communityInner} 
				src="/glowmom/icons/profile2.png"alt="" />
      			<img className={styles.imageIcon} 
				src="/glowmom/icons/babeOne.png" alt="" />
      			<img className={styles.communityImageIcon} src="/glowmom/icons/post2.png" alt="" />
      			<img className={styles.imageIcon2}
				src="/glowmom/icons/post3.png"
				alt="hello" />
      			<div className={styles.divider} />
      			<div className={styles.communityDivider} />
      			<img className={styles.icon} src="/glowmom/icons/heart.png"alt="" />
      			<img className={styles.communityIcon} 
				 alt="" />
      			<img className={styles.icon2} src="/glowmom/icons/heart.png" alt="" />
      			<img className={styles.icon3} src="/glowmom/icons/icon4.png" alt="" />
      			<img className={styles.icon4} src="/glowmom/icons/icon4.png" alt="" />
      			<img className={styles.icon5} src="/glowmom/icons/icon4.png" alt="" />
      			<img className={styles.vectorIcon} src="/glowmom/icons/heart.png"alt="" />
      			
      			<div className={styles.container}>
        				<div className={styles.background} />
        				<b className={styles.title}>Community</b>
        				<img className={styles.icon6} 
						src="/glowmom/icons/icon6.png"
						alt="" />
      			</div>
      			<div className={styles.communityContainer}>
        				<div className={styles.container2}>
          					<div className={styles.communityBackground} />
          					<div className={styles.label}>Prenatal</div>
          					<div className={styles.communityLabel}>Newborn</div>
          					<div className={styles.label2}>Infant</div>
          					<div className={styles.label3}>Toddler</div>
          					<div className={styles.label4}>Preschool</div>
          					<img className={styles.icon7} src="/glowmom/icons/icon10.png" alt="" onClick={onIconClick} />
          					<img className={styles.icon8} src="/glowmom/icons/icon10.png" alt="" />
          					<img className={styles.icon9} 
							src="/glowmom/icons/icon9.png" alt="" />
          					<img className={styles.icon10} src="/glowmom/icons/icon10.png" alt="prenatal" />
          					<img className={styles.icon11} src="/glowmom/icons/icon11.png" alt="" />
        				</div>
      			</div>
      			<div className={styles.background2} />
      			<div className={styles.communityTitle}>Trusted Advice</div>
      			<div className={styles.subtitle}>Quick insights from child-care experts</div>
      			<div className={styles.container3}>
        				<div className={styles.viewMore}>View more</div>
        				<img className={styles.vectorStrokeIcon}
						src="/glowmom/icons/stroke.png" alt="" />
      			</div>
      			<div className={styles.container4}>
        				<div className={styles.card} />
        				<div className={styles.communityCard} />
        				<div className={styles.card2} />
        				<div className={styles.card3} />
        				<img className={styles.containerChild} src="/glowmom/icons/profile2.png"  alt="" />
        				<img className={styles.containerItem} src="/glowmom/icons/expert_a.png" alt="" />
        				<div className={styles.author}>Dr. Leaane O'Neil</div>
        				<img className={styles.containerInner} 
						src="/glowmom/icons/user4.png"
						alt="" />
        				<img className={styles.ellipseIcon} 
						src="/glowmom/icons/communityChild.png"
						alt="" />
        				<div className={styles.title2}>Is Frequent Night Waking Normal?</div>
          					<div className={styles.communityAuthor}>Dr. Susan Collins</div>
          					<div className={styles.author2}>Dr. Jules Peterson</div>
          					<div className={styles.author3}>Dr. Jules Peterson</div>
          					<div className={styles.title3}>When Should Babies Begin Solid Foods?</div>
            						<div className={styles.title4}>Is Frequent Night Waking Normal?</div>
              							<div className={styles.title5}>Is Frequent Night Waking Normal?</div>
                								</div>
                								<img
												className={styles.containerIcon}
												src="/glowmom/icons/containerIcon.png"
												alt="createPost"
 												 onClick={() => navigate("/post")}   
																							/>


                								<div className={styles.statusBar}>
                  									<img className={styles.frameIcon} src="/glowmom/icons/status.png" alt="" />
                  									<div className={styles.action}>
                    										<div className={styles.time}>9:41</div>
                  									</div>
                								</div>
                								<div className={styles.container5}>
                  									<img className={styles.icon12} alt="" src="/glowmom/icons/icon12.png"  onClick={onIconClick} />
                  									<img className={styles.icon13} src="/glowmom/icons/icon13.png"  alt="" />
                  									<div className={styles.home} onClick={onIconClick}>
                    										<img className={styles.icon14} src="/glowmom/icons/icon14.png" alt="" />
                  									</div>
                  									<img className={styles.icon15} src="/glowmom/icons/icon15.png" alt="" />
                  									<div className={styles.divider2} />
                								</div>
                								</div>);
              							};
              							
              							export default Community;
              							