require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski stomach crawl soccer mixture hunt narrow equal gaze'; 
let testAccounts = [
"0x2ad4e0f9d1be0b5d7b9fd556ac0a732fcf238e86efd85bb9cc7fcbc5b0bc59a2",
"0x6fc54d2e2996507478c154d18388fd572840ad75ad86e49e2346eac36458a606",
"0x83b9ec98831467c8b847ce187db2b419e267b0a5e79acdad6a461ee19cafe5b9",
"0x412977d79115b9c855dc8ecca2636ceb5b9ce8fb6b3cfa1ebeef9736eb252298",
"0xc925fcbe62dd13d20f7d5866cc7ef90e5874abce655f52856468168fb685feca",
"0x16c791bbd2a66d0d3439e7235817a4216a940ddeeea19ac70e811660b4d045f5",
"0x232de693d3f710368722c2b7cbbc59f09507dc732b87af667fc346241554d67a",
"0xb9bba611703e97bb4df7a2ff0ca82eeb5fca71d60d12034f91fa5f6aa73fb0c9",
"0x70be39c3891c57a06cf64dad93e7a466051060f9cb6ac080ffb6d42acf7b5e0c",
"0xd3f358093439d9d87260d1d17631e8db1f10f3c76f1f1904f937705dc975faad"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

