import Image from "next/image";
import Logo from "../static/logo.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
const styles = {
  wrapper:
    "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
  authorContainer: "flex gap-[.4rem]",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  //isse hm author image ke border ko round kiya
  authorImage: "object-cover",
  postDetails: "flex-[2.5] flex flex-col",
  title: "font-bold text-2xl",
  briefing: "text-[#787878]",
  authorName: "font-semibold",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  articleDetails: "my-2 text-[.8rem]",
  category: "bg-[#F2F3F2] p-1 rounded-full",
  bookmarkContainer: "cursor-pointer",
  thumbnailContainer: " ",
};
const PostCard = () => {
  return (
    <Link href={"/post/123"}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={Logo}
                className={styles.authorImage}
                height={40}
                width={40}
              />
            </div>
            <div className={styles.authorName}>Prithvi Choudhary</div>
          </div>
          <h1 className={styles.title}>7 reasons to worship prith kamisama</h1>
          <div className={styles.briefing}>
            you dont need any reason,just worship
          </div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              Jan 17 • 1 min read •{" "}
              <span className={styles.category}>worship</span>{" "}
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image src={Logo} width={100} height={100} />
        </div>
      </div>
    </Link>
  );
};
export default PostCard;
