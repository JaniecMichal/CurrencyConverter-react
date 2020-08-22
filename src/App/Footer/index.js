import React from "react";
import {FooterWrapper, FooterLink} from "./styled";

const Footer = () => (
  <FooterWrapper>Currency Converter by Michał Janiec &copy; All right reserved 2020.
    <p>Icon made by [turkkub] from
      <FooterLink
        href="https://www.flaticon.com/authors/freepik"
        target="_blank"
        rel="noreferrer noopener"
      >
        {" "}www.flaticon.com
      </FooterLink>
    </p>
  </FooterWrapper>
)

export default Footer;