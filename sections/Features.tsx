export interface Feature {
    title: string;
    description: string;
}

export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

export interface Props {
    title?: string;
    id?: string;
    description?: string;
    features?: Feature[];
    cta?: CTA;
}

export default function Features({
    title = "Run Smarter, Not Harder",
    description = "Experience the future of running coaching right on your phone. Get personalized plans, real-time feedback, and consistent motivation—all through WhatsApp.",
    features = [
        {
            title: "📱 24/7 WhatsApp Assistance",
            description:
                "Always-on guidance and motivation to keep you on track—day or night! 🌙",
        },
        {
            title: "🎯 Personalized Training Plans",
            description:
                "Tailored workout sessions that adapt to your goals, routine, and fitness level. 🏅",
        },
        {
            title: "💰 1/10 the Normal Cost",
            description:
                "High-quality coaching at a fraction of the usual price. Your wallet will thank you! 💸",
        },
        {
            title: "❌ No Extra App Required",
            description:
                "Skip the downloads. Get everything you need straight through WhatsApp. 🚀",
        },
        {
            title: "⏰ Daily Reminders & Progress Tracking",
            description:
                "Stay consistent with friendly run prompts, progress checks, and plan adjustments. 📈",
        },
        {
            title: "⚡ Real-Time Feedback During Runs",
            description:
                "Get instant tips on pacing, form, and strategy as you hit the pavement. 🏃‍♂️",
        },
    ],
    cta = { id: "signup-cta", href: "/signup", text: "Sign Up Now", outline: false },
    id = "features",
}: Props) {
    return (
        <section class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28" id={id}>
            <div class="space-y-10">
                <div class="space-y-6 lg:w-1/2">
                    <h2 class="text-4xl leading-snug">{title}</h2>
                    <p class="text-lg">{description}</p>
                    <a
                        key={cta?.id}
                        id={cta?.id}
                        href={cta?.href}
                        target={cta?.href.includes("http") ? "_blank" : "_self"}
                        class={`font-normal btn btn-primary ${cta.outline && "btn-outline"}`}
                    >
                        {cta?.text}
                    </a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {features?.map((feature) => (
                        <div class="space-y-4 p-4 border border-secondary rounded-lg" key={feature.title}>
                            <h3 class="text-xl font-semibold">{feature.title}</h3>
                            <p class="text-base leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
