export default function PageTitle({ children }) {
  return (
    <>
      <h1 className="mt-8 text-3xl font-medium uppercase tracking-tight text-slate-700">
        {children}
      </h1>
      <figure className="mt-3 mb-6 h-[1px] w-full bg-slate-500"></figure>
    </>
  );
}
