import CryptoJS from "crypto-js";
import { secretKey } from "./secret-key";

export const dataEncrypt = (value) => {
    return CryptoJS.AES.encrypt(JSON.stringify(value), secretKey).toString()
}