
import SearchBar from "@/components/SearchBar";
import getImages from "@/utils/getImages";
import Image from "next/image"



const HomePage = async () => {
  const products = await getImages()


  console.log(products)

  return (
    <>
      <SearchBar />


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