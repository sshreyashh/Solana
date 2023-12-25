import { Connection, PublicKey, LAMPORTS_PER_SOL} from "@solana/web3.js";

export const showBalance = async(publickey : PublicKey) => {

    const conn = new Connection ("http://localhost:8899", "confirmed");
    const accinfo = await conn.getAccountInfo(publickey);
    return accinfo.lamports/LAMPORTS_PER_SOL;




}
// (async () => {
//     const publickey = "66jZnSnhZs2UT9xirS3QpATLUQu6Hxsc2nSLzfd87r9d"
//     const balance = await showBalance(new PublicKey(publickey));
//     console.log(`The balance for the publickey ${publickey} is:${balance}`); 


// })()