import React, { Component } from 'react'
import StrapiService from '../../services/strapiService'
import ImageGallery from 'react-image-gallery';

import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'

export default class Gallery extends Component {

  strapiService = new StrapiService()

  state = {
    data: {},
    images: []
  }

  componentDidMount() {
    this.getData()
  }

  onDataLoaded = (data) => {

    const imagesData = data.galleryMedia.map(image => {
      return {
        original: image.url,
        thumbnail: image.formats.thumbnail.url
      }
    })

    this.setState({
      data,
      images: imagesData
    })
  }

  onError = (error) => {
    console.log(error)
  }

  getData = () => {
    this.strapiService.getGalleryArea().then(this.onDataLoaded).catch(this.onError)
  }
    
  render() {
    const { data, images } = this.state
    return (
      <section className="section" id="gallery">
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
          <div className="row gallery-align">
            <ImageGallery items={images} />
          </div>
        </div>
      </section>
    )
  }
}
