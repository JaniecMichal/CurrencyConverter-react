import React from "react";
import {HeaderWrapper, HeaderTitle} from "./styled";

const Header = ({ mainTitle }) => (
  <HeaderWrapper>
    <HeaderTitle>{mainTitle}</HeaderTitle>
  </HeaderWrapper>
)

export default Header;