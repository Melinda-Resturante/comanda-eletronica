import authLoginStore from "../store/Auth";
import { dataDecrypt } from "./decrypt-data";

export const useDecryptUser = () => {
    const { user } = authLoginStore()

    const decryptUser = dataDecrypt(user)

    return { decryptUser }
}

