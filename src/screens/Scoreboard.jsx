export default function Scoreboard() {
  return (
    // Ranking Section
    <div className="bg-transparent p-16 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center mx-auto">
          <h2 className=" text-4xl font-extrabold text-yellow-800 ">
            Hall of Champions
          </h2>
        </div>
      </div>
      <div>
        <div className="mx-auto sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal shadow-2xl">
              <thead>
                <tr>
                  <th className="px-5 py-3  bg-yellow-500 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3  bg-yellow-500 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Games Played
                  </th>
                  <th className="px-5 py-3  bg-yellow-500 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Games Won
                  </th>
                  <th className="px-5 py-3  bg-yellow-500 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Games 2nd
                  </th>
                  <th className="px-5 py-3  bg-yellow-500 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Since
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="rank-row px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">SEBB</p>
                      </div>
                    </div>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 21, 2020
                    </p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">43</p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Activo</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="rank-row px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">SEBB</p>
                      </div>
                    </div>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 01, 2020
                    </p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">77</p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Activo</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="rank-row px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">SEBB</p>
                      </div>
                    </div>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 10, 2020
                    </p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">64</p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Suspended</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="rank-row px-5 py-5">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">SEBB</p>
                      </div>
                    </div>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 18, 2020
                    </p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <p className="text-gray-900 whitespace-no-wrap">70</p>
                  </td>
                  <td className="rank-row px-5 py-5">
                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Inactive</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Game Section */}
      <div className="flex items-center justify-between py-6">
        <div>
          <h2 className="text-3xl font-extrabold text-yellow-800">
            Games History
          </h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="lg:ml-40 ml-10 space-x-8">
            <button className="bg-yellow-500 px-4 py-2 rounded-md text-gray-700 font-semibold tracking-wide cursor-pointer">
              New Game
            </button>
            <button className="bg-yellow-500 px-4 py-2 rounded-md text-gray-700 font-semibold tracking-wide cursor-pointer">
              Your Stats
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3  bg-yellow-500 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Game Number
                  </th>
                  <th className="px-5 py-3  bg-yellow-500 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Game Type
                  </th>
                  <th className="px-5 py-3  bg-yellow-500 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Players
                  </th>
                  <th className="px-5 py-3  bg-yellow-500 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    2nd Place
                  </th>
                  <th className="px-5 py-3  bg-yellow-500 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Winner
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Vera Carpenter
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 21, 2020
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">43</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Activo</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Blake Bowman
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 01, 2020
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">77</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Activo</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Dana Moore
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 10, 2020
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">64</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-500 bg-transparent text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Suspended</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 bg-transparent text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Alonzo Cox
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td className="px-5 py-5 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Jan 18, 2020
                    </p>
                  </td>
                  <td className="px-5 py-5 bg-transparent text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">70</p>
                  </td>
                  <td className="px-5 py-5 bg-transparent text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Inactive</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="px-5 py-5 bg-transparent border-t border-gray-500 flex flex-col xs:flex-row items-center xs:justify-between">
              <span className="text-xs xs:text-sm text-gray-900">
                Showing 1 to 4 of 50 Entries
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button className="text-sm text-gray-700 transition duration-150 hover:bg-yellow-500 bg-yellow-500 font-semibold py-2 px-4 rounded-l">
                  Prev
                </button>
                &nbsp; &nbsp;
                <button className="text-sm text-gray-700 transition duration-150 hover:bg-yellow-500 bg-yellow-500 font-semibold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
