import { Reveal, Section, SectionHeading } from "./primitives";

const testimonials = [
  {
    id: "7680906052308864277",
    author: "@ntiktokera",
    url: "https://www.tiktok.com/@ntiktokera/video/7680906052308864277",
  },
  {
    id: "7679399155860573458",
    author: "@oragvelidzemakuna",
    url: "https://www.tiktok.com/@oragvelidzemakuna/video/7679399155860573458",
  },
  {
    id: "7679404550981176583",
    author: "@teklakakaurrridze",
    url: "https://www.tiktok.com/@teklakakaurrridze/video/7679404550981176583",
  },
  {
    id: "7672424380390984981",
    author: "@lisssssaedsch",
    url: "https://www.tiktok.com/@lisssssaedsch/video/7672424380390984981",
  },
];

export function Testimonials() {
  return (
    <Section className="border-y border-border/60 bg-ivory-deep/55">
      <Reveal>
        <SectionHeading eyebrow="ვიდეო შეფასებები" title="რას ამბობენ ჩვენზე" />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((video, i) => (
          <Reveal key={video.id} delay={i * 0.08}>
            <article className="mx-auto w-full max-w-[18rem]">
              <div className="aspect-[9/16] rounded-[2rem] border border-border bg-white p-1.5 shadow-card">
                <iframe
                  src={`https://www.tiktok.com/player/v1/${video.id}?controls=1&description=0&music_info=0&loop=1`}
                  title={`TikTok ვიდეო შეფასება — ${video.author}`}
                  loading="lazy"
                  allow="encrypted-media; picture-in-picture; fullscreen"
                  className="h-full w-full rounded-[1.6rem] border-0 bg-ink"
                />
              </div>
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 block text-center text-sm text-burgundy transition-colors hover:text-burgundy-deep"
              >
                {video.author}
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
