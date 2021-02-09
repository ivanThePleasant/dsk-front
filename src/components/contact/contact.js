import React, { Component } from 'react'
import StrapiService from '../../services/strapiService'

export default class Contact extends Component {

  strapiService = new StrapiService()

  state = {
    data: {},
    formInputNameField: '',
    formInputEmailField: '',
    formInputMessageField: '',
  }

  componentDidMount() {
    this.getData()
  }

  onDataLoaded = (data) => {

    this.setState({
      data
    })
  }

  onError = (error) => {
    console.log(error)
  }

  getData = () => {
    this.strapiService.getContactArea().then(this.onDataLoaded).catch(this.onError)
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  handleNameFieldInput = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      formInputNameField: e.target.value
    }))
  }

  handleEmailFieldInput = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      formInputEmailField: e.target.value
    }))
  }

  handleMessageFieldInput = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      formInputMessageField: e.target.value
    }))
  }

  render() {
    const { data } = this.state
    return (
      <React.Fragment>
        <section className="section colored" id="contact-us">
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

              <div className="col-lg-4 col-md-6 col-sm-12">
                <h5 className="margin-bottom-30">Keep in touch</h5>
                <div className="contact-text">
                  <span>{data.firstLineOfAddress}</span>
                  <br />
                  <span>{data.secondLineOfAddress}</span>
                  <br />
                  <span>{data.cityOrTown}</span>
                  <br />
                  <span>{data.postCode}</span>
                  <br />
                  <span>{data.phoneNumber}</span>
                  <br />
                  <span><a href={data.emailAddress}>{data.emailAddress}</a></span>
                  
                </div>
              </div>

              <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="contact-form">
                  <form id="contact" onSubmit={this.onFormSubmit} method="get">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <fieldset>
                          <input name="name" type="text" onChange={this.handleNameFieldInput} className="form-control" id="name" placeholder="Full Name" required="" />
                        </fieldset>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <fieldset>
                          <input name="email" type="email" onChange={this.handleEmailFieldInput} className="form-control" id="email" placeholder="E-Mail Address" required="" />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea name="message" rows="6" onChange={this.handleMessageFieldInput} className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="main-button">Send Message</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
            
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row gallery-align">
              <img src="assets/images/dvsa-enhanced-rider-scheme.png" alt="dvsa logo" className="bottom-banner" />
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
  
}
