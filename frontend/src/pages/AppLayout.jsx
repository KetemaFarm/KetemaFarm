import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Header, Loading, Navbar } from "../components";

const AppLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div className="bg-gray-100">
      <div>
        <Header />
        <Navbar />
      </div>
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="mx-auto px-6">
          <Outlet />
        </section>
      )}
      <Footer />
    </div>
  );
};
export default AppLayout;
