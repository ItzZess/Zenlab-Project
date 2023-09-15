import "@/styles/globals.css";
import TransitionPage from "@/components/TransitionPage";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";

export default function App(props: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);
  return <>{!loading ? <TransitionPage {...props} /> : <Preloader />}</>;
}
