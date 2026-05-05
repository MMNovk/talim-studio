'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
  label: string;
  content: TabContent;
}

interface Feature108Props {
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
    <section className="py-12 md:py-32" id="what-we-build">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-2 md:gap-4 text-center mb-6 md:mb-0">
          <h1 className="max-w-2xl text-2xl font-black md:text-3xl lg:text-4xl">
            {heading}
          </h1>
          <p className="text-ink/40 text-sm md:text-base">{description}</p>
        </div>

        <Tabs defaultValue={tabs[0]?.value} className="mt-6 md:mt-8">
          {/* Mobile: sidebar tabs left + content right, no image */}
          <div className="md:hidden flex flex-row items-start gap-3">
            <TabsList className="flex flex-col gap-0.5 flex-shrink-0 w-[90px]">
              {tabs.map(tab => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="w-full text-left px-2.5 py-2 text-sm font-semibold text-ink/35 data-[state=active]:text-ink data-[state=active]:bg-ink/[0.07] rounded-lg transition-all leading-snug"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-w-0 border-l border-ink/10 pl-4">
              {tabs.map(tab => (
                <TabsContent key={tab.value} value={tab.value} className="mt-0">
                  <div className="flex flex-col gap-3">
                    <span className="inline-block border border-ink/20 text-xs font-medium px-2.5 py-1 rounded-md w-fit">
                      {tab.content.badge}
                    </span>
                    <h3 className="text-xl font-black leading-tight">{tab.content.title}</h3>
                    <p className="text-ink/50 text-sm leading-relaxed">{tab.content.description}</p>
                    <a href="#contact" className="no-underline inline-block bg-ink text-white text-xs font-bold px-4 py-2.5 rounded-lg w-fit mt-1 tracking-wide uppercase">
                      {tab.content.buttonText}
                    </a>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>

          {/* Desktop: horizontal tabs + 2-col grid with image — unchanged */}
          <div className="hidden md:block">
            <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
                >
                  <div className="flex flex-col items-start justify-center gap-5 h-full">
                    <Badge variant="outline" className="w-fit bg-background text-base px-3 py-1">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-3xl font-semibold lg:text-5xl">
                      {tab.content.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg text-left">
                      {tab.content.description}
                    </p>
                    <a href="#contact" className="no-underline mt-2.5 max-md:w-full">
                      <Button size="lg">{tab.content.buttonText}</Button>
                    </a>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="rounded-xl object-cover w-full"
                    style={{ height: '400px' }}
                    loading="lazy"
                  />
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
