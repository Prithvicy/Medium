import Image from "next/image";
import Link from "next/link";
import SmallLogo from "../static/smallLogo.png";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import us from "../static/qazi.jpg";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
const styles = {
  logoContainer: "cursor-pointer",
  wrapper:
    "w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem] ",
  iconsContainer:
    "flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]",
  divider: "border-b",
  profileImage: "object-cover ",
  profileImageContainer: "w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden ",
};
const ReadersNav = () => {
  const { currentUser } = useContext(MediumContext);
  const dummyprofileimg = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"

  return (
    <div className={styles.wrapper}>
      <Link href={"/"}>
        <div className={styles.logoContainer}>
          <Image src={SmallLogo} />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <HiOutlineHome />
        <FiBell />
        <BiBookmarks />
        <RiArticleLine />
        <div className={styles.divider} />
        <BsPencilSquare />
      </div>
      <div className={styles.profileImageContainer}>
        <Image
          className={styles.profileImage}
          src={`https://res.cloudinary.com/demo/image/fetch/${currentUser?.photoURL??dummyprofileimg}`}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
export default ReadersNav;
