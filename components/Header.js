import Image from "next/image";
import logo from "../static/logo.png";
const Header = () => {
  const styles = {
    wrapper: "flex justify-center gap-10 p-5 bg-[#FCC017]",
    logoContainer: "flex items-center flex-start",
    content: "flex-1 max-w-7xl flex justify-between gap-10",
    logo:"cursor-pointer object-contain",
     bannerNav:"flex cursor-pointer items-center space-x-5",
     accentedButton:"bg-black text-white py-2 px-4 rounded-full ",
  };
  //justify between makes this gap where logo and buttons move to the corner
//objext cotain to keep the logo perfectly as we want even when size is changed 
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={logo} height={40} width={200} />
        </div>
        <div className={styles.bannerNav}>
          <div>Our story</div>
          <div>Mebership</div>
          <div>Sign In</div>
          <div className={styles.accentedButton}>Get Started</div>
        </div>
      </div>
    </div>
  );
};
export default Header;