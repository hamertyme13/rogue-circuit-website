export default function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        <div>
          <h3 className="text-4xl font-bold text-green-400">5+</h3>
          <p className="text-slate-400">Active Projects</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-green-400">100%</h3>
          <p className="text-slate-400">Built with Modern Tech</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-green-400">AI</h3>
          <p className="text-slate-400">Focused Development</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-green-400">∞</h3>
          <p className="text-slate-400">Future Possibilities</p>
        </div>
      </div>
    </section>
  );
}