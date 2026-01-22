import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { RetroUIButton, RetroUIBadge, RetroUICard, RetroUICardContent } from "@/components/retroui";
import { AlertTriangle, ArrowRight, Flame, Zap } from "lucide-react";

const testimonials = [
  {
    icon: "⭐⭐⭐⭐⭐",
    text: "This hurt. But it helped.",
    name: "Sidharth TS",
    initials: "ST",
    rotate: "1" as const,
  },
  {
    icon: "💀",
    text: "My co-founder cried.",
    name: "Keertan K",
    initials: "KK",
    rotate: "-1" as const,
  },
  {
    icon: "🔥",
    text: "Better than my mentor.",
    name: "Vivek Vardhan",
    initials: "VV",
    rotate: "2" as const,
  },
];

const steps = [
  {
    number: "01",
    title: "Paste your idea",
    description: "Describe your startup in all its glory",
  },
  {
    number: "02",
    title: "Choose roast level",
    description: "From gentle criticism to emotional devastation",
  },
  {
    number: "03",
    title: "Cry → Improve → Win",
    description: "Turn brutal feedback into success",
  },
];

const roastLevels = [
  { 
    name: "Soft Roast", 
    emoji: "🌶️", 
    description: "Gentle feedback with constructive suggestions",
    sampleRoast: `> Your AI SaaS idea has potential, but let's talk execution.
> 
> The market is crowded, so you'll need a clear differentiator.
> Consider focusing on a specific niche first.
> 
> Your pricing seems optimistic - maybe start lower
> and prove value before scaling up.`
  },
  { 
    name: "Medium Roast", 
    emoji: "🔥", 
    description: "Blunt truths with no sugarcoating",
    sampleRoast: `> Another AI SaaS? Groundbreaking.
> Did you also invent water?
> 
> Your TAM calculation assumes everyone on Earth
> will pay $99/month for something ChatGPT does for free.
> 
> "Disrupting" an industry you learned about
> from a TikTok video is a bold strategy.`
  },
  { 
    name: "Nuclear Roast", 
    emoji: "☢️", 
    description: "Maximum emotional damage, survivors only",
    sampleRoast: `> This isn't a startup idea. It's a cry for help.
> 
> You've managed to combine the worst parts of every
> failed SaaS with the innovation of a brick.
> 
> Your "revolutionary" AI does what Excel did in 1985,
> but slower and with more venture capital.
> 
> Even your mom would short this stock.`
  },
];

export default function Index() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="section-container py-14 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-5">
            <RetroUIBadge variant="destructive" className="inline-flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Emotional Damage Guaranteed
            </RetroUIBadge>
            <RetroUIBadge variant="default" className="inline-flex items-center gap-2">
              🔥 NEW: Competitor Reality Check
            </RetroUIBadge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-snug mb-5">
            We destroy your startup idea{" "}
            <span className="bg-primary px-2 py-0 leading-none inline-block">before investors do.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Brutally honest AI feedback. No sugarcoating. No mercy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/roast">
              <RetroUIButton size="xl" className="w-full sm:w-auto">
                ROAST MY IDEA
                <Flame className="ml-2 h-6 w-6" />
              </RetroUIButton>
            </Link>
            <Link to="/about">
              <RetroUIButton variant="outline" size="xl" className="w-full sm:w-auto">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </RetroUIButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What founders are saying 💀
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <RetroUICard key={index} rotate={testimonial.rotate}>
              <RetroUICardContent className="text-center py-8">
                <p className="text-5xl mb-4">{testimonial.icon}</p>
                <p className="text-lg font-bold mb-4">"{testimonial.text}"</p>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-gray-100 border-2 border-black rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{testimonial.initials}</span>
                  </div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                </div>
              </RetroUICardContent>
            </RetroUICard>
          ))}
        </div>
      </section>

      {/* How It Works? */}
      <section className="section-container py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          How It Works?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-block bg-yellow-400 px-4 py-2 border-2 border-black mb-4 retroui-shadow">
                <span className="text-3xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Choose Your Pain Level */}
      <section className="section-container py-20">
        <div className="max-w-5xl mx-auto bg-yellow-400 border-2 border-black p-8 retroui-shadow">
          <h2 className="text-4xl font-bold text-center mb-12">
            Choose Your Pain Level
          </h2>
          
          {/* Pain Level Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roastLevels.map((level, index) => {
              const rotations = ["-2deg", "1deg", "2deg"];
              return (
                <RetroUICard
                  key={level.name}
                  className="bg-white text-black transition-transform duration-200 hover:-translate-y-1.5"
                  style={{
                    transform: `rotate(${rotations[index]}) translateY(0)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `rotate(${rotations[index]}) translateY(-6px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotate(${rotations[index]}) translateY(0)`;
                  }}
                >
                  <RetroUICardContent className="text-center py-8">
                    <div className="text-5xl mb-4">{level.emoji}</div>
                    <h3 className="text-xl font-bold mb-2">{level.name}</h3>
                    <p className="text-sm text-gray-600">
                      {level.description}
                    </p>
                  </RetroUICardContent>
                </RetroUICard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container py-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to face the truth?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Your idea might be the next unicorn. Or it might be the next cautionary tale.
            Only one way to find out.
          </p>
          <Link to="/roast">
            <RetroUIButton size="xl">
              DESTROY MY STARTUP
              <Zap className="ml-2 h-6 w-6" />
            </RetroUIButton>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}