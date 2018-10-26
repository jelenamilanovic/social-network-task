import api from '../api'
import {Network} from '../components/Network.js'

export const store = {
  network: null,

  setNetwork (network) {
    this.network = network
  },

  fetchData () {
    return new Promise((resolve, reject) => {
      api.fetchData()
      .then(response => {
        let network = new Network()
        network.initState(response)
        this.setNetwork(network)
        resolve(response)
      })
    })
  }
}