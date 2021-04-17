const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const HDWalletProvider = require('@truffle/hdwallet-provider');
var provider = new HDWalletProvider(process.env.MEMONICS, 'https://data-seed-prebsc-1-s1.binance.org:8545');
const Web3 = require('web3');
const { assert } = require('console');
const { cpuUsage } = require('process');
const { resolve } = require('path');
var web3 = new Web3(provider);

let accounts = [];
var nftInterface;

class DBConnection {
    constructor() {
        var accounts = web3.eth.getAccounts();
        accounts.then(function(result) {
         })

        var nftabi = fs.readFileSync(process.env.NFT_JSON, 'utf8');
        var nftParesed = JSON.parse(nftabi);
        nftInterface = new web3.eth.Contract(nftParesed.abi, process.env.NFT_ADDRESS);
    }

    query = async (values) => {
            return new Promise((resolve, reject) => {
                const callback = (error, result) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(result);
                }
                nftInterface.methods._treeData(values[0]).call({from: accounts[0]}, callback);
            }).catch(err => {
                console.log(err);
            });
        }
}

module.exports = new DBConnection().query;