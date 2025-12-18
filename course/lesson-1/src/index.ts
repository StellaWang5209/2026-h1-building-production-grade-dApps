import { ethers } from "ethers";

async function main() {
    const URL = "https://services.polkadothub-rpc.com/testnet";
    const provider = new ethers.JsonRpcProvider(URL);
    const address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; // put your address here
    const balance = await provider.getBalance(address);
    console.log(`Balance of ${address}: ${ethers.formatEther(balance)} ETH`);
}

main();
