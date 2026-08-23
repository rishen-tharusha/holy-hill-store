export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-secondary-400" />
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-600">
        {children}
      </span>
    </div>
  );
}