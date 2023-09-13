const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider);


async function getRandomAddress() {
    console.log(web3.eth.accounts.create());
    console.log(await web3.shh.getPublicKey("96585b0a3afbdfdcbc41c27c343bed3b0966b60f38c1a1126690162292688acc"));
    // const privateKey = secp256k1.utils.randomPrivateKey();
    // console.log('PK', toHex(privateKey));
    // const publicKey = secp.getPublicKey(privateKey);
    // console.log('Public Key', toHex(publicKey));
    // console.log('0x'+toHex(keccak256(publicKey.slice(1)).slice(-20)))
};

getRandomAddress()