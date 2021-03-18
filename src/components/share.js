import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  PocketShareButton,
  PocketIcon
} from 'react-share'

const Share = ({title, url, content, twitterHandle, tags}) => {

    return(
        <div className="share">
          <FacebookShareButton url={url} >
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={40} round={true} />
          </TwitterShareButton>

          <LinkedinShareButton url={url} >
            <LinkedinIcon  size={40} round={true}/>
          </LinkedinShareButton>

          <RedditShareButton url={url} title={title} >
            <RedditIcon  size={40} round={true} />
          </RedditShareButton>

          <WhatsappShareButton url={url} title={title}>
               <WhatsappIcon  size={40} round={true}/>
           </WhatsappShareButton>

           <TelegramShareButton url={url} title={title}>
               <TelegramIcon  size={40} round={true}/>
           </TelegramShareButton>

           <EmailShareButton separator={url} body={content} subject={title}>
               <EmailIcon  size={40} round={true}/>
           </EmailShareButton>    
           
           <PocketShareButton url={url} title={title}>
               <PocketIcon  size={40} round={true}/>
           </PocketShareButton>                                 
        </div>
      )

}
export default Share