import { Link } from 'react-router-dom';

import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const HEADER_TABS = [
    { name: 'Randomizer', path: '/Randomizer' },
    { name: 'Scoreboard', path: '/Scoreboard' },
    { name: 'About', path: '/About' },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="flex mx-auto p-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex  justify-between md:px-6 space-x-10">
          <div className="flex items-center bg-yellow-500 hover:opacity-60 px-6 py-4 rounded-2xl ">
            <Link to="" className="text-white font-bold text-2xl uppercase">
              Catan SB
            </Link>
          </div>
          <ul className="flex font-medium space-x-8">
            {HEADER_TABS?.map((tab) => (
              <button
                onClick={() => handleTabClick(tab.path)}
                className={`${
                  location.pathname.includes(tab.name.toLowerCase())
                    ? 'bg-black text-gray-800 hover:text-white shadow-xl'
                    : ''
                } rounded-2xl hover:text-primary text-white flex-1 w-full md:text-xl`}
                key={tab.name}
              >
                {tab.name}
              </button>
            ))}
          </ul>
        </div>

        <div className="hidden items-center space-x-6 font-bold md:flex px-20 uppercase">
          <div
            className="hover:text-yellow-500 text-gray-700"
            onClick={() => togglePopup('signinPopup')}
          >
            Login
          </div>

          <Link
            to="/components/AuthInputs"
            className="px-8 font-bold text-white bg-yellow-500 hover:opacity-70 p-2 rounded-2xl"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
