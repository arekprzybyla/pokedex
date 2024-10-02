import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
