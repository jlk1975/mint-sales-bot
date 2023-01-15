import * as dotenv from 'dotenv'
dotenv.config()
const MATIC_KEY = process.env.ALCHEMY_MATIC_MAINNET;
const GORELI_KEY = process.env.ALCHEMY_ETH_GORELI;

import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: GORELI_KEY,  
  network: Network.ETH_GOERLI,  
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
const PixaMintEvents = {
  address: nftContractAddress,
  topics: [mintTopic, zeroTopic],
};

// TODO: Add whatever logic you want to run upon mint events.
const doSomethingWithTxn = (txn) => console.log(txn);

// Open the websocket and listen for events!
alchemy.ws.on(PixaMintEvents, doSomethingWithTxn);

// Example
// New Mint! The Snowflake Badge -> This is a Property called "TYPE"
// Minted By: 0x392
// Collection: PixaBadges
// Link: https://opensea.io/assets/matic/0x029dfd5b016ed918416cd1faf53d79a013b3065c/3039
// Can we get the tokenid from the txn hash?
