import  {PublicKey,Connection,LAMPORTS_PER_SOL}  from "@solana/web3.js";

export const airdrop = async (address : string , amount : number) =>{
   const publickey = new PublicKey(address);  //Wallet ID = Public Key
   const conn = new Connection ("http://localhost:8899", "confirmed");
   const signature = await conn.requestAirdrop(publickey, amount*LAMPORTS_PER_SOL);
   await conn.confirmTransaction(signature);


}

airdrop ("66jZnSnhZs2UT9xirS3QpATLUQu6Hxsc2nSLzfd87r9d",1);