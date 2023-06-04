import { ethers } from "hardhat";

async function main() {
  const wallets = [
    {
      name: "LP",
      address: "0x3f2Ef97a079636a9646a9F73C4273F552365D97b",
      amount: ethers.utils.parseEther("34983000000"),
    },
    {
      name: "Community Treasury",
      address: "0x88946c28123CaEA31037c0821BDD181Ea76FE4F4",
      amount: ethers.utils.parseEther("33800000000"),
    },
    {
      name: "Rewards Pool",
      address: "0x50F9D9C15BD848632689Bbd2D5bF465a6B59628e",
      amount: ethers.utils.parseEther("32617000000"),
    },
    {
      name: "Team",
      address: "0xF0fc8Da48120bdFc89A7Bc807A9f8F1D794D63F9",
      amount: ethers.utils.parseEther("8450000000"),
    },
    {
      name: "Marketing",
      address: "0x0Ba6c8BC5BC49DA07bC5AfC2610231a807dD616d",
      amount: ethers.utils.parseEther("8450000000"),
    },
  ];

  //   Import the token contract
  const Pepemon = await ethers.getContractFactory("Pepemon");

  //   Connect to the token contract
  const token = Pepemon.attach("0x62f2b2bdd96402071cf13ddad545fd2949f2f44d");

  for (const wallet of wallets) {
    const tx = await token.transfer(wallet.address, wallet.amount);
    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    console.log(
      `Transferred ${ethers.utils.formatEther(wallet.amount)} to ${
        wallet.name
      } : ${wallet.address}`
    );
  }

  console.log("Airdrop completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
