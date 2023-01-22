import Image from "next/image";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import logo from "../static/logo.png";
import Modal from "react-modal";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import PostModal from "./PostModal";
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
const Header = () => {
  const router = useRouter();
  const { currentUser, handleUserAuth } = useContext(MediumContext);
  const styles = {
    wrapper: "flex justify-center gap-10 p-5 bg-[#FCC017]",
    logoContainer: "flex items-center flex-start",
    content: "flex-1 max-w-7xl flex justify-between gap-10",
    logo: "cursor-pointer object-contain",
    bannerNav: "flex cursor-pointer items-center space-x-5",
    accentedButton: "bg-black text-white py-2 px-4 rounded-full ",
  };
  //justify between makes this gap where logo and buttons move to the corner
  //objext cotain to keep the logo perfectly as we want even when size is changed
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={logo} height={40} width={200} />
        </div>
        {currentUser ? (
          <div className={styles.bannerNav}>
            <div>Our story</div>
            <div>Membership</div>
            <Link href={"/?addNew=1"}>
            <div className={styles.accentedButton}>Write</div>
            </Link>
            <div className={styles.accentedButton}>Get Unlimited Access</div>
          </div>
        ) : (
          <div className={styles.bannerNav}>
            <div>Our story</div>
            <div>Mebership</div>
            <div onClick={handleUserAuth}>Sign In</div>
            <div className={styles.accentedButton}>Get Started</div>
          </div>
        )}
      </div>
      <Modal
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() =>router.push("/")}
        style={customStyles}
      >
        <PostModal/>
      </Modal>
    </div>
  );
};
export default Header;
