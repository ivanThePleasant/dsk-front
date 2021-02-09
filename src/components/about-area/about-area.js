import React, { Component } from 'react'
import StrapiService from '../../services/strapiService'
import About from '../about'
import HomeFeatures from '../home-features'

export default class AboutArea extends Component {

  strapiService = new StrapiService()

  state = {
    data: {},
    leftImage: null,
    rightImage: null,
    blockComponent: [],
  }

  componentDidMount() {
    this.getData()
  }

  onDataLoaded = (data) => {
    this.setState({ 
      data,
      leftImage: data.leftImage.url,
      rightImage: data.rightImage.url,
      blockComponent: data.aboutBlockComponent
    })
  }

  onError = (error) => {
    console.log(error)
  }

  getData = () => {
    this.strapiService.getAboutArea().then(this.onDataLoaded).catch(this.onError)
  }


  render() {
    const { data, leftImage, rightImage, blockComponent } = this.state
    return (
      <React.Fragment>
        <HomeFeatures blockComponent={blockComponent} /> 
        <About data={data} leftImage={leftImage} rightImage={rightImage} />
      </React.Fragment>
    )
  }
}