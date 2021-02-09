export default class StrapiService {
  
  _apiBase = 'https://ambi-dsk-backend-app.herokuapp.com'

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`)
    }
    return await res.json()
  
  }

  getWelcomeArea = async () => {
    const welcomeArea = await this.getResource('/welcome-area')
    return welcomeArea
  }

  getAboutArea = async () => {
    const aboutArea = await this.getResource('/about-area')
    return aboutArea
  }

  getProcessArea = async () => {
    const processArea = await this.getResource('/work-process-area')
    return processArea
  }

  getGalleryArea = async () => {
    const galleryArea = await this.getResource('/gallery-area')
    return galleryArea
  }

  getTestimonialsArea = async () => {
    const getTestimonials = await this.getResource('/testimonials-area')
    return getTestimonials
  }

  getContactArea = async () => {
    const getContact = await this.getResource('/contact-area')
    return getContact
  }

}