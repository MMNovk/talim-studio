'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  heading = "What I Build",
  description = "Fast turnaround. Fixed prices.",
  tabs = [],
}: Feature108Props) => {
  return (
    <section className="w-full py-24" id="what-we-build">
      {/* Section header */}
      <div className="text-center mb-12 px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-ink">
          {heading}
        </h2>
        <p className="font-mono text-sm text-ink/40 mt-3 tracking-widest uppercase">
          {description}
        </p>
      </div>

      <Tabs defaultValue={tabs[0]?.value}>
        {/* Tab triggers — 2×2 grid on mobile, flex row on desktop */}
        <TabsList className="grid grid-cols-2 md:flex md:flex-row md:justify-center border-b border-ink/10 px-8 md:px-0 bg-transparent gap-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="font-mono text-sm tracking-widest uppercase px-6 py-3 text-ink/40 border-b-2 border-transparent md:-mb-px transition-colors data-[state=active]:text-ink data-[state=active]:border-ink outline-none cursor-pointer bg-transparent"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* All panels always mounted — images preloaded, inactive hidden via CSS only */}
        <div className="relative overflow-hidden">
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              forceMount
              className="outline-none data-[state=inactive]:absolute data-[state=inactive]:inset-0 data-[state=inactive]:opacity-0 data-[state=inactive]:pointer-events-none"
            >
              {/* Two-column layout: content ~45% left, image ~55% right */}
              <div className="grid grid-cols-1 md:grid-cols-[45fr_55fr]">
                {/* Left: text content — below image on mobile */}
                <div className="flex flex-col justify-center px-8 py-12 md:px-16 md:py-16 order-2 md:order-1">
                  <p className="font-mono text-sm tracking-widest text-ink/40 mb-4">
                    {tab.content.badge}
                  </p>
                  <h3 className="font-black text-4xl lg:text-5xl tracking-tighter text-ink mb-4">
                    {tab.content.title}
                  </h3>
                  <p className="font-mono text-base text-ink/50 leading-relaxed mb-8">
                    {tab.content.description}
                  </p>
                  {/* CTA — circular arrow + text, matching hero style */}
                  <a
                    href="#contact"
                    className="w-fit flex items-center gap-3 group no-underline"
                  >
                    <div className="w-14 h-14 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink transition-all duration-500 overflow-hidden">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-ink group-hover:stroke-white transition-colors duration-500"
                      >
                        <path
                          d="M7 17L17 7M17 7H8M17 7V16"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-ink">
                      {tab.content.buttonText}
                    </span>
                  </a>
                </div>

                {/* Right: full-height image, no rounding, flush to edge */}
                <div className="h-64 md:h-[560px] order-1 md:order-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
};

export { Feature108 };
