import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <section className="flex items-center md:-mt-4 h-screen p-12 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto mt-8">
        <p className="text-9xl">
          <img src="https://i.ibb.co/k5FzNyp/755014.png" alt="" />
        </p>
        <div className="max-w-md text-center">
          <p className="text-lg font-semibold md:text-3xl text-red-800">
            {error?.message}
          </p>
          <Link
            to="/"
            className="font-bold text-2xl hover:bg-black hover:text-white btn"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ErrorPage;
