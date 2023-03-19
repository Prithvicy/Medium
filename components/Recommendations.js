import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import ReplitLogo from "../static/replit.png";
import TutorialImg from "../static/tutorial.jpg";
import CPLogo from "../static/cp.png";
import Qazi from "../static/qazi.jpg";
import JSLogo from "../static/jsLogo.png";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import App from "../components/donateNow/App";
import Modal from "react-modal";
Modal.setAppElement("#__next");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50% , -50%)",
    backgroundColor: "#fff",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10,11,13,.75)",
  },
};
const styles = {
  wrapper: "h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]",
  accentedButton:
    "flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full",
  searchBar:
    "flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full",
  searchInput: "border-none outline-none bg-none w-full ",
  authorContainer: "my-[2rem]",
  authorProfileImageContainer: "h-[5rem] w-[5rem] rounded-full overflow-hidden",
  authorName: "font-semibold mb-[.2rem] mt-[1rem]",
  authorFollowing: "text-[#787878]",
  authorActions: "flex gap-[.6rem] my-[1rem]",
  actionButton:
    "bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-small",
  recommendationAuthorProfileImageContainer:
    "rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] ",
  recommendationAuthorName: "text-sm",
  recommendationAuthorContainer: "flex items-center gap-[.6rem]",
  recommendationTitle: "font-bold",
  recommendationThumbnailContainer:
    "flex flex-1 items-center justify-center h-[4rem] w-[4rem] ",
  recommendationThumbnail: "object-cover",
  articleContentWrapper:
    "flex items-center justify-between cursor-pointer my-[1rem]",
  articleContent: "flex-[4]",
};
const Recommendation = ({post}) => {
  const router = useRouter();
<<<<<<< HEAD
  const pathName = router.route.split('/')[router.route.split('/').length - 2];
  const thisPage = `/${pathName}/${router.query.slug}`;
=======
  const thisPage = `/${router.route.split("/")[1]}/${router.query.slug}`;
  router.route.split("/")[1];

>>>>>>> 1b59404 (Payment and UI fix)
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get Unlimited Access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          placeholder="Search"
          type="text"
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image src={Qazi} width={100} hieght={100} />
        </div>
        <div className={styles.authorName}>Prithvi Choudhary</div>
        <div className={styles.authorFollowing}>1Z followers</div>
        <div className={styles.authorActions}>
          <Link href={`${thisPage}/?addNew=1`}>
            <div className={styles.actionButton}>Donate Now</div>
          </Link>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>
      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from medium </div>
        <div className={styles.articlesContainer}>
          {recommendedPosts.map((post) => (
            <div className={styles.articleContentWrapper}>
              <div className={styles.articleContent}>
                <div className={styles.recommendationAuthorContainer}>
                  <div
                    className={styles.recommendationAuthorProfileImageContainer}
                  >
                    <Image src={post.author.image} width={100} hieght={100} />
                  </div>
                  <div className={styles.recommendationAuthorName}>
                    {post.author.name}
                  </div>
                </div>

                <div className={styles.recommendationTitle}>{post.title} </div>
              </div>
              <div className={styles.recommendationThumbnailContainer}>
                <Image
                  className={styles.recommendationThumbnail}
                  src={post.image}
                  width={100}
                  hieght={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() => router.push(`${thisPage}`)}
        style={customStyles}
      >
        <App />
      </Modal>
    </div>
  );
};
export default Recommendation;

const recommendedPosts = [
  {
    title: "What can you do about this pri?",
    image: ReplitLogo,
    author: {
      name: "Prithvi Choudhary",
      image: CPLogo,
    },
  },
  {
    title: "Whats the ultimate question huh?",
    image: TutorialImg,
    author: {
      name: "Prithvi Choudhary",
      image: Qazi,
    },
  },
  {
    title: "How to be like pri in 2022?",
    image: JSLogo,
    author: {
      name: "AB",
      image: CPLogo,
    },
  },
];