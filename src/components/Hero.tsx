export default function Hero() {
  return (
    <section
      className="flex h-80
  bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
  bg-size-[20px_20px] items-center justify-center "
      id="hero"
    >
      <div className="flex flex-col gap-4 p-5">
        <span className="text-sm text-green-400">● Available for hiring</span>

        <div className="">
          <h1 className="text-5xl uppercase font-black text-transparent [-webkit-text-stroke:0.5px_white]">
            Hoshisai Umia
          </h1>

          <p className="max-w-md text-white/50">
            I build what your company needs.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Node.js",
            "Express",
            "TypeScript",
            "Tailwind",
            "shadcn/ui",
            "Next.js",
            "REST APIs",
            "PostgreSQL",
            "MySQL",
            "MongoDB",
          ].map((tech) => (
            <span
              key={tech}
              className="border border-white/20 px-3 py-1 text-xs text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href="#projects"
            className="bg-white text-black px-5 py-2 font-bold rounded"
          >
            Ver projetos
          </a>
          <a
            href="#contact"
            className="border border-white/40 text-white px-5 py-2 rounded"
          >
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}
