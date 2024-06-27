const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "LeXcZ"
global.ownerName = "LeXcZ"
global.ownerBot = "6287743212449","6289526135199","6287754538902","6285853501535"
global.ownerNumber = ["6287743212449","6289526135199","6287754538902","6285853501535"] 

global.Auto_Typing = true // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = true // auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = true

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})