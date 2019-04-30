let proc = function (msg) {
  return new Promise(resolve => {
    (async() => {
      resolve({
          code: '02',
          message: msg
      })
    })()
  })
}

module.exports = proc