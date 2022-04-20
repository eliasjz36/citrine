require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/03ohbOhBUP8eQggisZxKTumLmunUwuPq',
      accounts: [
        'b47d70bad8354cfd2c8e37722c798df4e14d7dda02f43afebb39e1a777eb5887',
      ],
    },
  },
}
