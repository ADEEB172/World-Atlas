import { NavLink, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>OOps! An error occurred.</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
        <button>Back to Home</button>
      </NavLink>
    </div>
  );
};
