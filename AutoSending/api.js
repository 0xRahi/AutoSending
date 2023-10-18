const express = require("express");
const ethers = require("ethers");
const axios = require("axios");




const app = express();
app.use(express.json());

// const provider = new ethers.providers.JsonRpcProvider(
//   "https://sepolia.infura.io/v3/11171bcd57644432b07be184a75b6cf7"
// ); // change to your actual provider

// const etherscanApiKey = "5H7R7WB1HA6AHZJKCP6WW7PFNA6X5J15HC"; // replace this with your Etherscan API key

// const provider = new ethers.providers.JsonRpcProvider(
//   "https://light-dark-night.ethereum-sepolia.discover.quiknode.pro/191092440cbe21d3a2ea6fd11a4d470ee4263a89/"
// );

// const getSigner = async () => {
//   console.log(provider);
//   const signer = await provider.getSigner();
//   console.log(signer);
// };


// getSigner();


const createWallet = async () => {
  const wallet = ethers.Wallet.createRandom();
  const address = wallet.address;
  const mnemonic = wallet.mnemonic.phrase;
  const privateKey = wallet.privateKey;
  console.log("Address: ", address)
  console.log("Private Key: ", privateKey)
  console.log("Mnemonic: ", mnemonic)
  return { address, mnemonic, privateKey };
};

createWallet();

// app.post("/create-wallet", async (req, res) => {
//   const wallet = await createWallet();
//   res.json(wallet);
// });




// const sendTransaction = async (privateKey, to, value) => {
//   // console.log(privateKey, to, value);
//   const wallet = new ethers.Wallet(privateKey, provider);
//   const transaction = {
//     to: to,
//     value: ethers.utils.parseEther(value),
//   };
//   const tx = await wallet.sendTransaction(transaction);
//   return tx.hash;
// };

// app.post("/send-transaction", async (req, res) => {
//     const { privateKey, to, value } = req.body;
//     console.log(privateKey, to, value);
//     const txHash = await sendTransaction(privateKey, to, value);
//     res.json({ txHash });
//   });

// 98 

// app.listen(3000, () => console.log("Server listening on port 3000"));