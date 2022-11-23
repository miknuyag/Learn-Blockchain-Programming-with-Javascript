// createPendingTransaction method test

import Blockchain from '../blockchain.js';
const bitcoin = new Blockchain();

bitcoin.createNewBlock(789457, 'OIUOEDJETH8754DHKD', '78SHNEG45DER56');
bitcoin.createNewTransaction(100, 'ALEXT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');

bitcoin.createNewBlock(548764, 'AKMC875E6S1RS9', 'WPLS214R7T6SJ3G2'); // 블록체인에 미결 트랜잭션 추가

bitcoin.createNewTransaction(50, 'ALEXT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
bitcoin.createNewTransaction(300, 'ALEXT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');
bitcoin.createNewTransaction(2000, 'ALEXT845SJ5TKCJ2', 'JENN5BG5DF6HT8NG9');

bitcoin.createNewBlock(548764, 'AKMC875E6S1RS9', 'WPLS214R7T6SJ3G2');

// console.log(bitcoin);
console.log(bitcoin.chain[2]);
