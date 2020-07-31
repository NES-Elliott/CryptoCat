const inquirer = require('inquirer')
const colors = require('colors')
const KeyManager = require('../lib/KeyManager')

const key = {
  async set() {
    const keyManager = new KeyManager()
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'Enter API Key '.green + 'https://nomics.com'
      }
    ])

    const key = keyManager.setKey(input.key)

    if(key) {
      console.log('API Key Set'.blue)
    }
  },
  show() {
    console.log('Show says hello')
  },
  remove() {
    console.log('Remove says hello')
  }
}

module.exports = key
