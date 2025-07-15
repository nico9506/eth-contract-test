require("dotenv").config();
const ethers = require("ethers");

const SMART_CONTRACT_ADDRESS = "0x5F91eCd82b662D645b15Fd7D2e20E5e5701CCB7A";

const contractABI = [
  {
    inputs: [],
    name: "count",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "get",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "inc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const provider = new ethers.AlchemyProvider("goerli", process.env.TEST_API_KEY);

async function main() {
  const counterContract = new ethers.Contract(
    SMART_CONTRACT_ADDRESS,
    contractABI,
    provider,
  );

  const currentCounterValue = await counterContract.get();

  console.log(currentCounterValue.toString());
}

main();
