import ReadersNav from "../../components/ReadersNav";
import Recommendation from "../../components/Recommendations";
const styles = {
  content: "flex",
};
const Post = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <Recommendation />
    </div>
  );
};
export default Post;
