import "../styles/globals.css";
import { MediumProvider } from "../context/MediumContext";

export default function App({ Component, pageProps }) {
  return (
    <MediumProvider>
      <Component {...pageProps} />
    </MediumProvider>
  );
}
