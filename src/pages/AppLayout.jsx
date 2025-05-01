import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <h1>Header</h1>
      <h1>Navbar</h1>
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="mx-auto max-w-6xl  px-8 py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default AppLayout;
