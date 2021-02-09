import React from 'react'

import AboutFeatureLeft from '../about-feature-left'
import AboutFeatureRight from '../about-feature-right'

const About = (props) => {
  const data = props.data
  const leftImage = props.leftImage
  const rightImage = props.rightImage


  return (
    <React.Fragment>
      <AboutFeatureRight data={data} image={leftImage} />
      <AboutFeatureLeft data={data} image={rightImage} />
    </React.Fragment>
    
  )
}

export default About