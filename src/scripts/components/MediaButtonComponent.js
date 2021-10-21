import React from 'react'

import '../aframe/MediaButton'

import icon_audio from './../../assets/icons/audios_icon.svg'
import icon_video from './../../assets/icons/videos_icon.svg'
import icon_image from './../../assets/icons/images_icon.svg'
import icon_story from './../../assets/icons/stories_icon.svg'

export default class MediaButton extends React.Component {
  static Assets = [
    <img id='icon_audio' src={icon_audio} alt=''></img>,
    <img id='icon_video' src={icon_video} alt=''></img>,
    <img id='icon_image' src={icon_image} alt=''></img>,
    <img id='icon_story' src={icon_story} alt=''></img>
  ];

  render() {
    return (
      <a-media-button {...this.props}/>
    );
  }
}