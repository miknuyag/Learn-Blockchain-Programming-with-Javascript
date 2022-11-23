// hashBlock method test

import Blockchain from '../blockchain.js';
const bitcoin = new Blockchain();

const previousBlockHash = '87765DA6CCF0668238C1D27C35692E11';
const currentBlockData = [
    {
        amount: 100,
        sender: 'B4CEE9C0E5CD571',
        recipient: '3A3F6E462D48E9',
    }
]
const nonce = 100;

bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

