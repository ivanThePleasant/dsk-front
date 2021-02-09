import React, { Component } from 'react'
import StrapiService from '../../services/strapiService'

export default class Testimonials extends Component {

  strapiService = new StrapiService()

  state = {
    data: {},
    testimonialsBlockComponent: [],
    iconURL: ''
  }

  componentDidMount() {
    this.getData()
  }

  onDataLoaded = (data) => {

    const testimonialsBlockComponent = data.testimonialsBlockComponent



    this.setState({
      data,
      testimonialsBlockComponent
    })
  }

  onError = (error) => {
    console.log(error)
  }

  getData = () => {
    this.strapiService.getTestimonialsArea().then(this.onDataLoaded).catch(this.onError)
  }

  mapTestimonialComponentEntries = (testimonialsBlockComponent) => {
    return testimonialsBlockComponent.map((item) => {
      return (
        <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
          <div className="team-item">
            <div className="team-content">
              <i><img src={item.icon.url} alt="" /></i>
              <p>{item.testimonial}</p>
              <div className="team-info">
                <h3 className="user-name">{item.personName}</h3>
                <span>{item.personTitle}</span>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }


  render(){
    const { data, testimonialsBlockComponent } = this.state
    const componentParts = this.mapTestimonialComponentEntries(testimonialsBlockComponent)
    return (
      <section className="section" id="testimonials">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">{data.areaTitle}</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>{data.areaSubtitle}</p>
              </div>
            </div>
          </div>


          <div className="row">
            {componentParts}
          </div>
        </div>
      </section>
    )  
  }
  
}

