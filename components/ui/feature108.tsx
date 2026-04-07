'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

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
  badge = "",
  heading = "What I Build",
  description = "Fast turnaround. Fixed prices.",
  tabs = [],
}: Feature108Props) => {
  return (
    <section className="py-32" id="what-we-build">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="max-w-2xl text-3xl font-black md:text-4xl">
            {heading}
          </h1>
          <p className="text-ink/40">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0]?.value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                forceMount
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10 data-[state=inactive]:hidden"
              >
                {/* Mobile-only banner image */}
                <div className="relative w-full h-40 rounded-xl overflow-hidden lg:hidden">
                  <Image
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-start justify-center gap-5 h-full max-lg:bg-transparent max-lg:p-0 max-lg:rounded-none max-lg:gap-4">
                  <Badge variant="outline" className="w-fit bg-background text-base px-3 py-1">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg text-left">
                    {tab.content.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-2.5 inline-flex items-center justify-center rounded-md font-semibold transition-colors bg-zinc-900 text-white hover:bg-zinc-700 h-11 px-8 text-base no-underline max-md:w-full"
                  >
                    {tab.content.buttonText}
                  </a>
                </div>
                {/* Desktop-only image */}
                <div className="relative w-full min-h-[400px] rounded-xl overflow-hidden hidden lg:block">
                  <Image
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
