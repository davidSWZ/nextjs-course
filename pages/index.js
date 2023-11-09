import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featuredPosts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Max' Blog</title>
        <meta name="description" content="I blog about tech stuff" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
