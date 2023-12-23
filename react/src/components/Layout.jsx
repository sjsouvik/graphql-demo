import { NavBar } from "./NavBar/NavBar";

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
