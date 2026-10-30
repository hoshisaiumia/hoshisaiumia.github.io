function App() {
  return (
    <section
      className="h-full bg-zinc-950
  bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
  bg-[size:20px_20px]"
      id="hero"
    >
      {/* Title */}
      <div className="flex text-white text-5xl uppercase font-black text-transparent flex-col justify-between justify-items-stretch p-5 ">
        <h1 className="self-start lg:self-start cursor-default">Imagine</h1>
        <h1 className="self-center lg:self-start cursor-default">A</h1>
        <h1 className="self-end lg:self-start [-webkit-text-stroke:0.5px_white] hover:[-webkit-text-stroke:0.5px_lime] transition-all text-transparent cursor-default">
          World
        </h1>
      </div>
    </section>
  );
}

export default App;
