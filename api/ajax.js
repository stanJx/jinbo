import axios from 'axios'
import qs from 'qs'

export default function (param) {
  return new Promise((resolve, reject) => {
    console.log(param)
    axios({
      method: 'POST',
      // url: 'http://localhost:3003/commercial-goods/public/',
      url: 'http://localhost:80/commercial-goods/public/',
      data: qs.stringify(param)
    }).then((response) => {
      console.log(response.data.data)
      resolve(response.data.data)
    }).catch(function (error) {
      console.log(error)
      reject(error)
    })
  })
}
