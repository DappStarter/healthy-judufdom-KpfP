require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note prefer prosper install creek bridge swim'; 
let testAccounts = [
"0x3031c46b1d7856105b2830a173a2950f1b229a1ff660eddfcd55d338ca006e3f",
"0x06e22f2184104d2c303259635061e1ceb91392f4b7591f173d334bc5a4acbae0",
"0x80c3b8160071446285ac992f59031f5ce06eba72e0f8402decdeded452e862aa",
"0x4ed9c1f224c7600ce2b13e0eb3b53a030e5ff1706a8dde5bcf7157cfc1cc9974",
"0xec1b8d2432500fca4b9ef9715b8dfc5bb3a7c8444ae52d44c88f36e0854594d6",
"0xcd95de11c23b8316ac8c3dc3ca193d6ae416da7a7f90702d6b75fb41fe4d5c3a",
"0x4e95ac45a0dc8e97e3af5a2a1d35c60dc9c3a176ec1a22f3c2f516200645270a",
"0xef0bcfe45f5cf7f236d62c38fd5db8c0e6c34995b75bb12d42a9861b743bf92b",
"0xd04e218597b55c859ca095c365c87c5414a0024979f27f93ee2e149f854f4ff2",
"0x074cd574103377f0a0988f1b376d4eea97172bd9263e2981f94e2d0e0c3f4dbf"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

