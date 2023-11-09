import Head from "next/head";
import PostContent from "../../components/Posts/PostDetail/PostContent";
import { getPostData, getPostFiles } from "../../lib/posts-util";

function PostDetailPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = getPostData(slug);
  return {
    props: {
      post,
      revalidate: 600,
    },
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map((postFileName) =>
    postFileName.replace(/\.md$/, "")
  );
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

export default PostDetailPage;
