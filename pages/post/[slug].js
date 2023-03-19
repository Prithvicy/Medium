import { useContext, useEffect, useState } from "react";
import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommendation from "../../components/Recommendations";
import { MediumContext } from "../../context/MediumContext";
import { Router, useRouter } from "next/router";
import App from "../../components/donateNow/App";
const styles = {
  content: "flex",
};
const Post = () => {
  const { posts, users } = useContext(MediumContext);
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const router = useRouter();
  useEffect(() => {

    //protector kindahhh
    if (posts.length === 0) {
      return;
    }
    // console.log(router.query.slug, "slugggyyy");
    setPost(posts.find((post) => post.id === router.query.slug));
    // getting slug query from url (post id ) and finding that in the costs collection
    setAuthor(users.find((user) => user.id === post?.data?.author));
  }, [post]
  //idhar post depednecy he q ki jab post milega fir he author data lena he compare karke user me
  );
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recommendation post={post} author={author}/>
    </div>
  );
};
export default Post;
