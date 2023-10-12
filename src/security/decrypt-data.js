import CryptoJS from 'crypto-js'
import { secretKey } from './secret-key'

export const dataDecrypt = (value) => {
    const bytes = CryptoJS.AES.decrypt(value, secretKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    try {
        return JSON.parse(decryptedData);
    } catch (error) {
        console.error("Erro ao fazer o parse do JSON:", error);
        return null; 
    }
}