import React from 'react'
import 'aframe'
import 'aframe-environment-component'
import { Entity, Scene } from 'aframe-react'

import MediaLoader from './scripts/components/MediaLoaderComponent'
import MediaCircle from './scripts/components/MediaCircleComponent'

import Assets from 'aframe-react-assets'
import rootAssets from './scripts/rootAssets'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planePosition: {x: 1, y: 1, z: 1},
      planeMaterial: {transparent: true, shader: 'flat'}
    }
  }

  render() {
    return (
      <Scene stats>
          <Assets assets={rootAssets} timeout={4e4} interval={200} debug={true} onLoad={this.updateAssetsLoadingStatus} onLoadingBySize={this.updateAssetsCurrentInfo} onLoadingByAmount={this.updateAssetsLoadingInfo}>
            <MediaLoader></MediaLoader>
          </Assets>
          <Entity environment='preset: contact;'/>
  
          <Entity primitive='a-camera' look-controls='enabled: true;' active='true' cursor='rayOrigin: mouse;' raycaster='objects: .clickable'></Entity>
          <Entity primitive='a-plane' position={this.state.planePosition} src='#icon_audio' material={this.state.planeMaterial}></Entity>
  
          <MediaCircle position='2 2 2' name='test'/>
      </Scene>
    );
  }
}
