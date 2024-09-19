//importando as dependencias
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//definir a rede
//bitcoin - rede principal - mainnet
//testnet - rede de teste - tesnet
const network = bitcoin.networks.testnet

//derivação de carteiras HD
//`m/49'/0'/0'/0` - rede principal - mainnet
//`m/49'/1'/0'/0` - rede de teste - tesnet
const path = `m/49'/1'/0'/0` 

//criando o mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//criando a raiz da cartiera HD
let root = bip32.fromSeed(seed, network)

