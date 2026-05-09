'use client'

import { Card } from "@/components/ui/card"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="relative mb-12 h-[560px] w-full overflow-hidden border-white/10 bg-black/[0.96] shadow-2xl shadow-black/20 md:h-[500px]">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      <div className="flex h-full flex-col lg:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-6 sm:p-8 lg:max-w-[44%]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
            Project Butler
          </p>
          <h3 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Curated 3D Guide
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-300 sm:text-base">
            A compact concierge for the work below, pairing AI systems,
            spatial interfaces, and full-stack builds in one focused gallery.
          </p>
        </div>

        <div className="relative min-h-[260px] flex-1 lg:min-h-0">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  )
}
