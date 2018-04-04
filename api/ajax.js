import axios from 'axios'
import qs from 'qs'

export default {
  post (opt, backFn, failFn) {
    let request = {
      type: opt.type || undefined,
      data: JSON.stringify(opt.data || {}),
      md5: 'md5'
    }
    console.log(request)
    axios({
      method: 'POST',
      // url: '/api/zjsbs/njuapi',
      url: '/zjsbs/njuapi',
      data: qs.stringify(request)
    }).then(function (response) {
      console.log(response)
      if (typeof backFn === 'function') { backFn(response) }
    }).catch(function (error) {
      console.log(error)
      if (typeof failFn === 'function') { failFn(error) }
    })
  }
}
