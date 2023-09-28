import { useState } from "react";

const useFetchLogin = (setToken) => { 
    const [register, setRegister] = useState("");
    const [password, setPassword] = useState("");

    const body = {
        "id": register,
        "senha": password
    };

    const fetchData = async () => {
        const url = "https://comanda-eletronica-api.vercel.app/auth/login";

        const init = {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(body)
        };

        try {
            const response = await fetch(url, init);
            if (response.ok) {
                const json = await response.json();
                const token = json.acssesToken;
                setToken(token); 
            } else {
                console.log("Erro ao fazer login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return { setRegister, setPassword, handleSubmit };
};

export default useFetchLogin;
