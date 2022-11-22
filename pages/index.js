import Head from "next/head";
import Image from "next/image";
import { createApi } from "unsplash-js";

export const getServerSideProps = async () => {
  const serverApi = createApi({
    accessKey: process.env.ACCESS_KEY,
  });

  const photos = await serverApi.photos.list({ perPage: 30 });
  console.log(photos);
  return {
    props: {
      photos: photos.response.results,
    },
  };
};

const Home = ({ photos }) => {
  return (
    <>
      <Head>
        <title>Pinterest</title>
      </Head>
      <section className='columns-7 max-w-7xl mx-auto space-y-4'>
        {photos.map((el) => (
          <div key={el.id} className='rounded-md overflow-hidden'>
            <img
              src={el.urls.regular}
              alt={el.description}
              height={300}
              width={200}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
