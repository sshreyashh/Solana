"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showBalance = void 0;
const web3_js_1 = require("@solana/web3.js");
const showBalance = (publickey) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = new web3_js_1.Connection("http://localhost:8899", "confirmed");
    const accinfo = yield conn.getAccountInfo(publickey);
    return accinfo.lamports / web3_js_1.LAMPORTS_PER_SOL;
});
exports.showBalance = showBalance;
// (async () => {
//     const publickey = "66jZnSnhZs2UT9xirS3QpATLUQu6Hxsc2nSLzfd87r9d"
//     const balance = await showBalance(new PublicKey(publickey));
//     console.log(`The balance for the publickey ${publickey} is:${balance}`); 
// })()
//# sourceMappingURL=index.js.map