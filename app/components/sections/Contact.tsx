import { SectionWrapper } from "./SectionWrapper";
import { SocialLinks } from "../hero/SocialLinks";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl w-full text-center flex flex-col items-center">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">
          Get in Touch
        </h2>
        
        <p className="text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
          I&rsquo;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&rsquo;ll try my best to get back to you!
        </p>

        {/* Primary Email CTA */}
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-colors mb-16 shadow-xs hover:shadow-md"
        >
          Say Hello
        </a>

        {/* Reusing SocialLinks for consistency with Hero */}
        <div className="flex flex-col items-center">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
            Connect
          </p>
          <SocialLinks className="mt-0 gap-8" />
        </div>
      </div>
    </SectionWrapper>
  );
}
