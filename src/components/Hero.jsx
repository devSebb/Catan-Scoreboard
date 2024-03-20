export default function Hero() {
  return (
    <div className="container flex flex-col mx-auto items-center mt-10 overflow-hidden">
      <div className="flex flex-col w-fit">
        <img
          src="src/assets/catan_logo.png"
          alt="CatanLogo"
          className="p-6 max-w-full"
        />
      </div>
      <div className="flex flex-col items-center md:max-w-7xl py-3 md:py-8">
        <h1 className="text-5xl md:text-7xl font-semibold text-yellow-700 text-center">
          Scoreboard & Randomizer
        </h1>
      </div>
    </div>
  );
}
