import React, { Component } from 'react'

import {Svg} from '../_Elements/Svg.sc';
import gold from '../../Assets/images/gold.jpg';

class ShipSvg extends Component {
  render () {

    let mask = "url(" + gold + ") no-repeat 100% 100%"
    return (
      <Svg {...this.props} mask={mask} id="svg2" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="100%" width="80%" viewBox="0 0 200 115" version="1.0">
          <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="248" height="248"><image href={gold} x="0" y="-80" width="248" height="248"></image></pattern>          </defs>
          <path id="path12357" fill="url(#img1)" fillRule="evenodd" d="m93 0l-93 81v1l37 22-5 4 22 20h128v-10l1-3 6-3 3-7-1-13v-5l2-6-40-51 3-10v-1l-10 2-13-17-2-1-36-3h-2zm0 1v20l-22 5v1c-4 10-4 22 2 32v2c-4 9-2 19 3 27h-2l-4 4c-18-28-17-55-1-70 15-14 24-21 24-21zm2 0l36 3v20l-19 5v1h1l-3 14c-5-7-1-18 3-25v-1l-17.5 2.5-0.5-19.5zm38 4l12 16-11.5 2.5-0.5-18.5zm-24 15l-13.5 5v-2.5l13.5-2.5zm45 0.5l-6 2.5-1-1 7-1.5zm-8 2l1 1-13.5 4.5v-2.5l12.5-3zm-53 0.5v2c-5 2-11 3-16 1l16-3zm38 3v2l-13 1 13-3zm22 5l39 50-24 4-7 5c-4-10-2-22 1-32h1v-2h-1c-7-7-11-15-9-25zm-44 22l-12 2v-1l12-1zm-15 1v1.5l-18 3.5c5.13-4.175 12.928-4.616 18-5zm17 0.5l-14 4.5v-2l14-2.5zm-17 3v2.5c-5 1-11 1-16 0l16-2.5zm64-0.5l-22 3v-2c7-1.5 14.5-1 22-1zm2 1c-7.5 4-15.5 6.5-24 7v-3l24-4zm-28 1v1.5l-10 2.5 10-4zm-18 3l2 3-3 8s-1-7 1-11zm18 0.5v2.5h-13l13-2.5zm-63 29.5c-8 10-17.5 13-29 8l-38-19s3-4 7-6c22-12.5 43 6 60 17zm26-6v2l-13 1c4-1.5 8.5-2.5 13-3zm3 0l14 1-14 1v-2zm14 2c0.5 4.5 3.32 10.819 4 12v2l18-1v12c-14 2-20-5-25-17l-6-1-1-4h-4v-2l14-1zm-17 1v1l-6.5-0.5 6.5-0.5zm39 7v3l-13 1 13-4zm3 0l17 1-17 2v-3zm17 3c0 11-7 14.5-17 14v-12l17-2z"/>
      </Svg>
    )
  }
}

export default ShipSvg