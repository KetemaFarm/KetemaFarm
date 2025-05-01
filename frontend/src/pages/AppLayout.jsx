import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Header, Loading, Navbar } from "../components";

const AppLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <div className="fixed w-screen">
        <Header />
        <Navbar />
      </div>
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="mx-auto max-w-6xl px-8 py-20">
          <Outlet />
        </section>
      )}
      <Footer />
    </>
  );
};
export default AppLayout;
