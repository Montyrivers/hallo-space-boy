const axios = require('axios')

const KEY = 'api_key=f4pR3vFKwyxZC3LqeZRBFt0kgqx6vNanomwQNviv'

const APOTD_URL = 'https://api.nasa.gov/planetary/apod'
const asteroid_feed_url = 'https://api.nasa.gov/neo/rest/v1/feed'
const epic_feed_url = 'https://api.nasa.gov/EPIC/api/natural/images?'
const epic_image_url = 'https://api.nasa.gov/EPIC/archive/natural/'
const mars_rover_url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&'
const space_weather_url = 'https://api.nasa.gov/DONKI/notifications'

export const spaceCoronal = async () => {
  const response = await axios.get(`${space_weather_url}?${KEY}`)
  // console.log(response.data)
  return response.data
}

export const spaceWeatherRange = async (start, end) => {
  const response = await axios.get(`${space_weather_url}?startDate=${start}&endDate=${end}&${KEY}`)
  // console.log(response.data)
  return response.data
}


export const astronomyPOTD = async () => {
  const response = await axios.get(`${APOTD_URL}?${KEY}`)
  // console.log(response.data)
  return response.data;
}
export const asteroidFeed = async (start_date = '2019-06-15') => {
  const response = await axios.get(`${asteroid_feed_url}?start_date=${start_date}&${KEY}`)
  // console.log(response)
  return response.data.near_earth_objects[`${start_date}`]
}

export const epicImages = async () => {
  const response = await axios.get(`${epic_feed_url}${KEY}`)
  // console.log(response.data)
  return response.data
}

export const olderEpics = async (date) => {
  const response = await axios.get(`https://api.nasa.gov/EPIC/api/natural/date/${date}?${KEY}`)
  // console.log(response.data)
  return response.data
}
export const renderAnEpic = async (date = '2019/06/25', image = 'epic_1b_20190625024728') => {
  const response = await axios.get(`${epic_image_url}${date}/png/${image}.png?${KEY}`)
  // console.log(response.config.url)
  return response.config.url
}

export const marsRoverPhotos = async () => {
  const response = await axios.get(`${mars_rover_url}${KEY}`)
  // console.log(response.data.photos)
  return response.data.photos

}