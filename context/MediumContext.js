import { signInWithPopup } from "firebase/auth";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { auth, provider } from "../firebase";

const MediumContext = createContext();
const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "user"));
      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    };
    getUsers();
    // when page loads get all the users from the collection
  }, []);
  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));
      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              body: doc.data().body,
              brief: doc.data().brief,
              category: doc.data().category,
              postLength: doc.data().postLength,
              bannerImage: doc.data().bannerImage,
              title: doc.data().title,
              postedOn: doc.data().postedOn.toDate(),
              author: doc.data().author,
            },
          };
        })
      );
    };
    getPosts();
  }, []);
  const addUserToFirebase = async (user) => {
    await setDoc(doc(db, "user", user?.email), 
    {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 0,
    });
    // console.log("bye")

  };
  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    const user = userData.user;
    // console.log(user, "bollo");
    setCurrentUser(user);
    addUserToFirebase(user);
    // console.log("hello")

  };

  return (
    <MediumContext.Provider
      value={{ posts, users, handleUserAuth, currentUser }}
    >
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
