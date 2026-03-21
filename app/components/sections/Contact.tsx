import { SectionWrapper } from "./SectionWrapper";
import { SocialLinks } from "../hero/SocialLinks";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl w-full text-center flex flex-col items-center">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-zinc-100 mb-2">
          Let&rsquo;s Connect
        </h2>
        
        <p className="text-gray-500 dark:text-zinc-400 mb-10 max-w-lg mx-auto leading-relaxed">
          I&rsquo;m open to software engineering, AI/ML, and data-focused
          opportunities. If you&rsquo;d like to collaborate, recruit, or simply
          connect, I&rsquo;d be glad to hear from you.
        </p>

        {/* Primary Email CTA */}
        <a
          href="mailto:aryansraut29@gmail.com"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white dark:text-zinc-900 bg-gray-900 dark:bg-zinc-100 hover:bg-gray-800 dark:hover:bg-zinc-200 rounded-full transition-colors mb-16 shadow-xs hover:shadow-md"
        >
          Email Me
        </a>

        {/* Reusing SocialLinks for consistency with Hero */}
        <div className="flex flex-col items-center">
          <p className="text-xs font-mono text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
            Connect
          </p>
          <SocialLinks className="mt-0 gap-8" />
        </div>
      </div>
    </SectionWrapper>
  );
}
