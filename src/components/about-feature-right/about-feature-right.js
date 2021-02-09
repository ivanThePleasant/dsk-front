import React from 'react'

const AboutFeatureRight = (props) => {
  const imgURL = props.image
  
  
  
  return (
    <section className="section padding-top-70 padding-bottom-0" id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
            <img src={imgURL} className="rounded img-fluid d-block mx-auto" alt="App" />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
            <div className="left-heading">
              <h2 className="section-title">{props.data.rightTextTitle}</h2>
            </div>
            <div className="left-text">
              <p>{props.data.rightText}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="hr"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutFeatureRight