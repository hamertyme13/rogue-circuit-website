export default function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        <div>
          <h3 className="rc-text-primary text-4xl font-bold">5+</h3>
          <p className="text-slate-400">Active Projects</p>
        </div>

        <div>
          <h3 className="rc-text-primary text-4xl font-bold">100%</h3>
          <p className="text-slate-400">Built with Modern Tech</p>
        </div>

        <div>
          <h3 className="rc-text-secondary text-4xl font-bold">AI</h3>
          <p className="text-slate-400">Focused Development</p>
        </div>

        <div>
          <h3 className="rc-text-accent text-4xl font-bold">∞</h3>
          <p className="text-slate-400">Future Possibilities</p>
        </div>
      </div>
    </section>
  );
}
