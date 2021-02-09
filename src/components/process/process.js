import React, { Component } from 'react'
import StrapiService from '../../services/strapiService'



export default class ProcessArea extends Component {

  strapiService = new StrapiService()

  state = {
    data: {},
    workProcessComponent: [],
    priceListLink: '',
    instructionsLink: '',
  }

  componentDidMount() {
    this.getData()
  }

  onDataLoaded = (data) => {

    const workProcessComponent = data.workProcessComponent
    const priceListLink = data.priceList.url
    const instructionsLink = data.instructions.url

    this.setState({
      data,
      workProcessComponent,
      priceListLink,
      instructionsLink
    })
  }

  onError = (error) => {
    console.log(error)
  }

  getData = () => {
    this.strapiService.getProcessArea().then(this.onDataLoaded).catch(this.onError)
  }

  mapProcessComponentEntries = (workProcessComponent) => {
    return workProcessComponent.map(item => {
      return (
        <div key={item.id} className="col-lg-2 col-md-3 col-sm-6 col-6">
          <a href="#" className="mini-box">
            <i><img src={item.icon.url} alt="" /></i>
            <strong>{item.titleProcessBlock}</strong>
            <span>{item.shortDescription}</span>
          </a>
        </div>
      )
    })
  }


  render() {
    const { data, workProcessComponent, priceListLink, instructionsLink } = this.state
    const componentParts = this.mapProcessComponentEntries(workProcessComponent)
    return (
      <section className="mini" id="work-process">
        <div className="mini-content">
          <div className="container">
            <div className="row">
              <div className="offset-lg-3 col-lg-6">
                <div className="info">
                  <h1>{data.areaTitle}</h1>
                  <p>{data.areaSubtitle}</p>
                </div>
              </div>
            </div>


            <div className="row gallery-align">
              {componentParts}
            </div>

            <div className="row gallery-align margin-top-30">
              <div  className="col-lg-5 col-md-5 col-sm-6 col-6">
                <a href={priceListLink} className="mini-box mini-box-link">
                  <strong>{data.priceListText}</strong>
                </a>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-6 col-6">
                <a href={instructionsLink} className="mini-box mini-box-link">
                  <strong>{data.instructionsText}</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}