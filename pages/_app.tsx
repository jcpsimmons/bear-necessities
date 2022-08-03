import type { AppProps } from "next/app";
import MainLayout from "../components/MainLayout";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
