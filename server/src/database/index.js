const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/TutorialMERN?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
   { useNewUrlParser: true })

module.exports = mongoose