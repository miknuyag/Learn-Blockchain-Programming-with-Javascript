// createNewBlock method test

import Blockchain from '../blockchain.js';
const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OIUOEREDHKDKD', '78s97d4x6dsf'); // 가짜 해시값
bitcoin.createNewBlock(2389, 'OIUOEREDHKDKD', '78s97d4x6dsf');
bitcoin.createNewBlock(2389, 'OIUOEREDHKDKD', '78s97d4x6dsf');

console.log(bitcoin);
