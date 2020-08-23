# Crypto Catalog

**CryptoCat** is a cryptocurrency command line interface (CLI) application for tracking up-to-date prices. CryptoCat uses the [Nomics](https://nomics.com) API to get the information from their database and condense, format, and simplify the statistics. This app uses Node.js along with NPM packages such as Inquirer, Commander, Configstore, Axios and Colors.

## How To Use: Commands
---

To call CryptoCat, simply type `cryptocat`.

While `cryptocat -h` will show you all available commands.

`-h` can be used against all top level commands to find their subcommands.

### Top Level Commands
---
* Key
  - Set: The CLI will ask you to set your API key. The API key is not reset upon closing the terminal, but is also not saved to a file in the `cryptocat` directory.

  - Show: Displays the current value for your API key.

  - Remove: Removes your API key.

* Check
  - Price: Allows you to check the current price and rank of the top 3 cryptocurrencies, Bitcoin, Etherium, and Ripple.
    - --coin: This command allows you to add your own cryptocurrency to track, as long as it is supported by Nomics.
    - --cur: Allows you to change the currency type.

## Installation
---
1. Clone this repository over to your device.

2. Head over to [nomics.com](https://nomics.com) and sign up for a FREE API key with your email. The fields don't matter as much, they will send you one regardless, but it may take time.

3. In your terminal, navigate to the CryptoCat directory and type `npm install`

4. (Optional) You may want to use `npm link` or `sudo npm link` (if you're on linux or mac) if you want to call the commands globally on your device.
