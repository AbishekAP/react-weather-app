import React from "react";

function Footer() {
    const year=new Date().getFullYear();
  return (
    <>
      <footer>
        <p>Copyright &copy; {year} abishek. All Rights Reseverd</p>
      </footer>
    </>
  );
}

export default Footer;
