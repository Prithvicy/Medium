import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommendation from "../../components/Recommendations";
const styles = {
  content: "flex",
};
const Post = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain/>
      <Recommendation />
    </div>
  );
};
export default Post;
