import * as dotenv from 'dotenv'
dotenv.config()
const MATIC_KEY = process.env.ALCHEMY_MATIC_MAINNET;
import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: MATIC_KEY,  
  network: Network.MATIC_MAINNET,  
};

const alchemy = new Alchemy(settings);

// This is the "transfer event" topic we want to watch.
const mintTopic = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
// This is the "from address" we want to watch.
const zeroTopic =
  "0x0000000000000000000000000000000000000000000000000000000000000000";
// This is the NFT contract we want to watch.
const nftContractAddress = "0x029Dfd5B016ed918416CD1fAF53d79A013b3065c";

// Create the log options object.
const hackrDaoMintEvents = {
  address: nftContractAddress,
  topics: [mintTopic, zeroTopic],
};

// TODO: Add whatever logic you want to run upon mint events.
const doSomethingWithTxn = (txn) => console.log(txn);

// Open the websocket and listen for events!
alchemy.ws.on(hackrDaoMintEvents, doSomethingWithTxn);