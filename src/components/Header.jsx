export default function Header() {
  return (
    <nav class="flex container mx-auto p-6">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center space-x-6">
          <div class="container flex items-center bg-yellow-500 hover:opacity-60 px-6 py-4 rounded-2xl">
            <h1 class="text-white font-bold text-2xl uppercase">Catan SB</h1>
          </div>
          <div class="hidden space-x-8 font-bold md:flex px-20">
            <a
              href="#home"
              id="home"
              class="text-gray-700 hover:text-white uppercase font-light"
            >
              Home
            </a>
            <a
              href="scoreboards.html"
              id="scoreboards"
              class="text-gray-700 hover:text-white uppercase font-light"
            >
              Scoreboards
            </a>
            <a
              href="#about"
              id="about"
              class="text-gray-700 hover:text-white uppercase font-light"
            >
              About
            </a>
          </div>
        </div>
        <div class="hidden items-center space-x-6 font-bold md:flex px-20 uppercase">
          <div
            class="hover:text-yellow-500 text-gray-700"
            onclick="togglePopup('signinPopup')"
          >
            Login
          </div>
          <a
            href="#"
            onclick="togglePopup('signupPopup')"
            class="px-8 font-bold text-white bg-yellow-500 hover:opacity-70 p-2 rounded-2xl"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
