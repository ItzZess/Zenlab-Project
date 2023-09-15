import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import cn from "classnames";
import Preloader from "./Preloader";
const TransitionPage = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const prevScreen = useRef(Component);
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    const handler = () => {
      setTransitioning(true);
      setTimeout(() => {
        prevScreen.current = Component;
        setTransitioning(false);
      }, 280);
    };
    router.events.on("routeChangeComplete", handler);
    return () => {
      router.events.off("routeChangeComplete", handler);
    };
  }, [Component, router.events]);
  const Loading = () => <Preloader />;
  const Screen = !transitioning ? Component : Loading;
  return (
    <div
      className={cn({
        "animate-slideUpEnter": !transitioning,
        "animate-slideUpLeave": !transitioning,
      })}
    >
      <Screen {...pageProps} />
    </div>
  );
};
export default TransitionPage;
