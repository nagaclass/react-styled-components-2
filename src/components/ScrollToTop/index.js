import { ArrowUpOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ScrollTopTopWrap } from "./ScrollToTopEl";

const ScrollTopTop = () => {
  const [isScrollable, setIsScrollable] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setIsScrollable(true);
    } else {
      setIsScrollable(false);
    }
  });

  return (
    <ScrollTopTopWrap
      to="home"
      smooth
      duration={700}
      isScrollable={isScrollable}
    >
      <ArrowUpOutlined />
    </ScrollTopTopWrap>
  );
};

export default ScrollTopTop;
