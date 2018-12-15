import axios from 'axios'

export default function (param) {
  return new Promise((resolve, reject) => {
    console.log(param)
    axios({
      method: 'POST',
      url: '/db',
      data: param
    }).then((response) => {
      console.log(response.data)
      resolve(response.data.data)
    }).catch(function (error) {
      console.log(error)
      reject(error)
    })
  })
}
