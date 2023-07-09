import { Link } from "react-router-dom";
import useStore from "../store";
import Spinner from "./Spinner";

const Header = () => {
  const store = useStore();
  const username = store.username;
  const isLoading = store.requestLoading;
  return (
    <>
      <header className="bg-white h-20">
        {isLoading ?
          <div className="pt-4 pl-2 bg-ct-blue-600 fixed">
            <Spinner />
          </div>
          :
          <nav className="h-full flex justify-between container items-center">
            <div>
              {username}
            </div>
            <ul className="flex items-center gap-4">
              <li>
                <Link to="/" className="text-ct-dark-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-ct-dark-600">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/addgame" className="text-ct-dark-600">
                  Add game
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-ct-dark-600">
                  News
                </Link>
              </li>
            </ul>
          </nav>}
      </header>
    </>
  );
};

export default Header;
