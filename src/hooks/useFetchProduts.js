import { useEffect } from "react";
import { useDecryptUser } from "../security/userDecrypt";
import productStore from "../store/products";

const useFetchProduts = () => {
    const { decryptUser } = useDecryptUser()
    const { products, setProducts } = productStore()

    const authToken = decryptUser.acssesToken

    const fetchProdutos = () => {
        fetch('https://comanda-eletronica-api.vercel.app/produtos', {
          headers: {
            'Authorization': `Bearer ${authToken}`,
          }
        })
        .then(response => response.json())
        .then(data => {
          setProducts(data.slice(0, 5))
        })
        .catch(error => {
          console.error('Erro ao buscar os produtos:', error);
        });
      };

      useEffect(() => {
        fetchProdutos()
      }, [])

      return { products }
}

export default useFetchProduts