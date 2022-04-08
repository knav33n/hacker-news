import "./Layout.scss";

function Layout({ children }) {
  return (
    <>
      <header>
        <h4>Hacker News</h4>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
