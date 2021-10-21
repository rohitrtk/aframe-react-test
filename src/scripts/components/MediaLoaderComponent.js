import React from 'react'

import test_Face from './../../assets/media/test_Face.jpg'
import test_Guitar from './../../assets/media/test_Guitar.mp4'
import test_HelloWorld from './../../assets/media/test_Hello World.txt'
import test_Pew from './../../assets/media/test_Pew.wav'

export default class MediaLoader extends React.Component {
  static Assets = [
    <img id='testImg' src={test_Face} alt=''></img>,
    <video id='testVid' src={test_Guitar} alt=''></video>,
    <a-asset-item id='testItem' src={test_HelloWorld} alt=''></a-asset-item>,
    <audio id='testAudio' src={test_Pew} alt=''></audio>
  ];
}