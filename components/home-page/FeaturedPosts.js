import classes from "./FeaturedPosts.module.css";
import PostsGrid from "../Posts/PostsGrid";

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
