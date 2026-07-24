interface Props {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    center?: boolean;
}

export default function SectionTitle({
    eyebrow,
    title,
    subtitle,
    center = false,
}: Props) {
    return (
        <div
            className={`mb-16 ${center
                ? "mx-auto max-w-3xl text-center"
                : "max-w-3xl"
                }`}
        >
            {eyebrow && (
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-6 text-lg leading-8 text-slate-400">
                    {subtitle}
                </p>
            )}
        </div>
    );
}