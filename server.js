const app = require('express')()
const config = require('./config')
const port = 4000

app.use(config)

app.listen(port, () => {
    console.log('backend is running on port : '+ port)
}).on('error', ()=>{
    console.log('backend is not running off port : '+ port)
})