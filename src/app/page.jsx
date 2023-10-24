"use client"
import SearchBar from "@/components/SearchBar";
import Image from "next/image"

import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
      })
  }, [])

  console.log(products)

  return (
    <>
      <SearchBar />

      {loading && <p className="text-5xl font-bold my-8 text-center">Loading ..</p>}
      <main className="columns-3 m-5 max-w-[1280px] mx-auto">
        {
          products?.products?.map(product => {
            return (
              <article className="p-4 rounded border m-5 w-full" key={product.id}>
                <Image src={product.thumbnail}

                  width={400}
                  height={500}
                  alt="thambnail"
                  className="w-full rounded"
                />
                <h2></h2>
              </article>
            )
          })
        }
      </main>
    </>
  );
};

export default HomePage;