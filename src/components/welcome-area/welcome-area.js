import React, { Component } from 'react'
import StrapiService from '../../services/strapiService'


export default class WelcomeArea extends Component {

  strapiService = new StrapiService()

  state = {
    data: {},
    imageURL: ''
  }

  componentDidMount() {
    this.getData()
  }

  onDataLoaded = (data) => {
    this.setState({ data, imageURL: data.welcomeAreaBackgroundImage.url })
  }

  onError = (error) => {
    console.log(error)
  }

  getData = () => {
    this.strapiService.getWelcomeArea().then(this.onDataLoaded).catch(this.onError)
  }


  render() {
    const { data, imageURL } = this.state
    const welcomeBg = {
      backgroundImage: `url(${imageURL})`
    }
    

    return (
      <div className="welcome-area" id="welcome" style={welcomeBg}>
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <h1>{data.mainHeading}</h1>
                <p>{data.subheading}</p>
                <a href="#features" className="main-button-slider">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

