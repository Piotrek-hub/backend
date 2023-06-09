const Contract = require('web3-eth-contract');
Contract.setProvider('https://rpc2.sepolia.org/');

import abi from 'src/contract/abi';

var contract = new Contract(abi, '0x6d3563a4e42516a0669F013386dEc54cb16Cd63c');

export default contract;
