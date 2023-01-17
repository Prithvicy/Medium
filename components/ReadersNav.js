import Image from "next/image";
import Link from "next/link";
import SmallLogo from "../static/smallLogo.png";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import us from "../static/qazi.jpg";
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
        <Image className={styles.profileImage} src={us} />
      </div>
    </div>
  );
};
export default ReadersNav;
