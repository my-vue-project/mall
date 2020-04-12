import axios from 'axios'

export function instance1(config) {
  // console.log(config)
  const isc1 = axios.create({
    // baseURL: "http://156.136.185.210.8000/api/h8",
    baseURL: "http://123.207.32.32:8000/api/h8",
    // baseURL: "http://106.54.54.237:8000/api/h8",
    timeout: 5000
  })
  isc1.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  isc1.interceptors.response.use(res => {
    return res.data
  }, err => {

  })
  return isc1(config)
}