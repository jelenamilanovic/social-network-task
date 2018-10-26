import * as data from './data.json'

export default {
  // faking API call, just for fun
  fetchData () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 200)
    })
  }
}