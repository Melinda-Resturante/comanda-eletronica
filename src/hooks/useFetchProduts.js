import { useEffect, useState } from "react";
import { useDecryptUser } from "../security/userDecrypt";
import productStore from "../store/products";

const useFetchProduts = () => {
    const { decryptUser } = useDecryptUser()
    const authToken = decryptUser.acssesToken

    const { products, setProducts } = productStore()

    const fetchProdutos = () => {
        fetch('https://comanda-eletronica-api.vercel.app/produtos', {
          headers: {
            'Authorization': `Bearer ${authToken}`,
          }
        })
        .then(response => response.json())
        .then(data => {
          setProducts(data.slice(0, 5))
          console.log(products)
        })
        .catch(error => {
          console.error('Erro ao buscar os produtos:', error);
        });
      };

      useEffect(() => {
        fetchProdutos()
        console.log('Fez o get dos produtos')
      }, [])

      return { products }
}

export default useFetchProduts