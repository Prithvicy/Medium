import Image from "next/image";
import Quazi from "../static/qazi.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Banner from "../static/banner.png";
import Author from "../static/author.jpg";
import Thumbnail from "../static/thumbnail.webp";
const styles = {
  wrapper: "flex items-center justify-center flex-[3] border-l border-r",
  content: "h-screen p-[2rem] w-full",
  postHeaderContainer:
    "flex justify-between items-center mt-[2.2rem] mb-[1.2rem]",
  authorContainer: "flex gap-[1rem] ",
  authorProfileImageContainer:
    "h-[3rem] w-[3rem] grid center rounded-full overflow-hidden",
  image: "object-cover",
  colum: "flex-1 flex flex-col justify-center",
  postDetails: "flex gap-[.2rem] text-[#787878] ",
  listenButton: "flex gap-[.2rem] items-center text-[#1A8917]",
  socials: "flex gap-[1rem] text-[#787878] cursor-pointer",
  space: "w-[.5rem]",
  bannerContainer: "h-[18rem] w-full grid centre overflow-hidden mb-[2rem]",
  articleMainContainer: "flex flex-col gap-[1rem]",
  title: "font-bold text-3xl",
  subtitle: "font-mediumSerifItalic text-[1.4rem] text-[#292929]",
  articleText: "font-mediumSerif text-[1.4rem]  text-[#292929]",
};
const ArticleMain = ({ post, author }) => {
  console.log(post.data, "hahahahahahahah");
  console.log(author, "hell yahh");
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={styles.image}
                src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.colum}>
              <div>{author?.data?.name}</div>
              <div className={styles.postDetails}>
                <span>
                  {" "}
                  {new Date(post.data?.postedOn).toLocaleString("en-us", {
                    day: "numeric",
                    month: "short",
                  })}
                  • {post.data?.postLength} min read •{" "}
                </span>

                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={`https://res.cloudinary.com/demo/image/fetch/${post?.data?.bannerImage}`}
              height={1000}
              width={1000}
            />
          </div>
          <h1 className={styles.title}>{post?.data?.title}</h1>
          <h4 className={styles.subtitle}>
            <div>
              {author?.data?.name} ,{" "}
              {new Date(post.data?.postedOn).toLocaleString("en-us", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div>{post?.data?.brief} </div>
          </h4>
          <div className={styles.articleText}>
            Agency Wallet Address : {post?.data?.wallet}
          </div>
          <div className={styles.articleText}>{post?.data?.body}</div>
        </div>
      </div>
    </div>
  );
};
export default ArticleMain;
