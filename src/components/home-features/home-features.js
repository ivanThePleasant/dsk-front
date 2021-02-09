import React from 'react'

const prependURL = 'http://localhost:1337'

const renderBlock = (array) => {
  const block = array.map((item) => {
    return (
      <div key={item._id} className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
        <div className="features-small-item">
          <div className="icon">
            <i><img src={item.icon.url} alt="" /></i>
          </div>
          <h5 className="features-title">{item.blockTitle}</h5>
          <p>{item.blockBody}</p>
        </div>
      </div>
    )
  })
  return block
}

const HomeFeatures = (props) => {

  return (
    <section className="section home-feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">

              {renderBlock(props.blockComponent)}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures