import { Metadata } from "next";
import NotFound from "./components/not-found";

export const metadata: Metadata = {
  title: "404 Page | Hawkrix Agency ",
};

const ErrorPage = () => {
  return <NotFound />;
};

export default ErrorPage;
