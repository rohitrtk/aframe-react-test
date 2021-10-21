import React from 'react'

import '../aframe/MediaCircle'

export default class MediaCircle extends React.Component {
  render() {
    return (
      <a-media-circle {...this.props}/>
    );
  }
}