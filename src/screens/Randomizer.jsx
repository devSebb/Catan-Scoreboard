export default function Randomizer() {
  return (
    <section id="randomizer" className="overflow-hidden">
      <div id="content-left" className="flex flex-col md:flex-row items-start">
        <div id="gen-options" className="pt-32 pl-20 md:w-1/3">
          <span className="text-4xl font-semibold">
            <b>Please select game type:</b>
          </span>
          <br />
          <input
            type="radio"
            name="game-type"
            value="normal"
            checked
            className="my-4"
          />
          Normal (1-4 players)
          <br />
          <input
            type="radio"
            name="game-type"
            value="expanded"
            className="py-2"
          />
          Expansion (5-6 players)
          <br />
          <button
            id="gen-map-button"
            type="button"
            disabled={true}
            className="font-semibold text-xl bg-yellow-500 py-3 px-8 rounded-2xl my-4"
          >
            Loading resources...
          </button>
        </div>
        <div id="map-container" className="flex flex-col">
          {/* Map will be generated here */}
        </div>
      </div>
    </section>
  );
}
