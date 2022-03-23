import { navigate } from "@reach/router";
import { useEffect } from "react";

const IndexPage = () => {
  useEffect(() => {
    navigate("/bio");
  }, []);

  return null;
};

export default IndexPage;
