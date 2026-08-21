interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Section({
  id,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>

          {description && (
            <p className="mt-4 leading-7 text-gray-600">{description}</p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
