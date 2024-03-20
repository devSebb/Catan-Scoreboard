export default function Hero() {
  return (
    <div class="container flex flex-col mx-auto items-center mt-10 overflow-hidden">
      <div class="flex flex-col w-fit">
        <img
          src="src/assets/catan_logo.png"
          alt="CatanLogo"
          class="p-6 max-w-full"
        />
      </div>
      <div class="flex flex-col items-center md:max-w-7xl py-3 md:py-8">
        <h1 class="text-5xl md:text-7xl font-semibold text-yellow-700 text-center">
          Scoreboard & Randomizer
        </h1>
      </div>
    </div>
  );
}
