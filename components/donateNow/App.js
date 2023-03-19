import { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";

import { Router, useRouter } from "next/router";

import { MediumContext } from "../../context/MediumContext";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App() {
  const { posts, users } = useContext(MediumContext);
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const router = useRouter();
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  useEffect(() => {
    //protector kindahhh
    if (posts.length === 0) {
      return;
    }
    console.log(router.query.slug, "sluggggyyyy");
    setPost(posts.find((post) => post.id === router.query.slug));
    // getting slug query from url (post id ) and finding that in the costs collection
    setAuthor(users.find((user) => user.id === post?.data?.author));
  }, [post]);
  console.log(post, "dataa hereee");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bata = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: bata.get("ether"),
      addr: post?.data?.wallet,
    });
  };

  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <div
        className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white"
        style={{ height: "40vh", width: "60vw" }}
      >
        {" "}
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Send ETH payment
          </h1>
          <div className="">
            <div className="my-3">
              <h1>Address : {post?.data?.wallet}</h1>
            </div>
            <div className="my-3">
              <input
                name="ether"
                type="text"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button
            type="submit"
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
          >
            Pay now
          </button>
          <ErrorMessage message={error} />
          <div style={{ textAlign:"center"}}>
            <TxList txs={txs} />
          </div>
        </footer>
      </div>
    </form>
  );
}
