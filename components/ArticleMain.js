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
const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={styles.image}
                src={Quazi}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.colum}>
              <div>Prithvi Choudhary</div>
              <div className={styles.postDetails}>
                <span>Jan 19 • 2 min read • </span>

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
              src={Banner}
              height={1000}
              width={1000}
            />
          </div>
          <h1 className={styles.title}>7 cool ways to focus like pri</h1>
          <h4 className={styles.subtitle}>
            <div>Prithvi Choudhary , June 15 , 2022</div>
            <div>Brief: Kya he bolu yaar ....hawa hawa aiii </div>
          </h4>
          <div className={styles.articleText}>
            To understand smart contracts you need to first understand what a
            blockchain is (check out one of my previous blogs on blog chain for
            more information on it ).In short think of it as multiple blocks
            that store data and a hash (for each block). The blocks are
            connected so that the hash of a certain block depends on the
            previous block. This “BlockChain “ acts as a public ledger of
            transactions that occur on a particular network. The idiosyncratic
            part of the blockchain is that it is decentralized hence a lot of
            issues that arise due to middlemen are eliminated.
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleMain;
