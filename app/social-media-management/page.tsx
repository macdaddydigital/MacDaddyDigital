import { JsonLd } from "@/components/json-ld"
import { Shell } from "@/components/shell"
import { Block, ContentPage, FaqList, PageCta, PointList, RelatedLinks, TextLink } from "@/components/site-page"
import { faqSchema, pageMetadata, pageSeo, serviceSchema } from "@/lib/seo"

export const metadata = pageMetadata(pageSeo.social)

const faqs = [
  {
    question: "Do you post for us?",
    answer:
      "Yes, on a rhythm we agree up front. The point is a presence that stays active, not a burst of posts and then silence.",
  },
  {
    question: "Will it still sound like our business?",
    answer:
      "That’s the job. We write in the business’s voice. If a caption could belong to anyone, it isn’t finished.",
  },
  {
    question: "How is social media management priced?",
    answer:
      "It’s a custom quote based on how often you need to show up and how much we handle. We’ll confirm that price before anything starts.",
  },
] as const

export default function SocialMediaPage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: "Social media management for local businesses",
          serviceType: "Social media management",
          description: pageSeo.social.description,
          path: pageSeo.social.path,
          area: "both",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <ContentPage
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Social media", path: "/social-media-management" },
        ]}
        eyebrow="Local businesses"
        title={
          <>
            Show up like you <em className="text-[#e8b84a] italic">mean it</em>
          </>
        }
        lede="A quiet feed makes a good business look closed. Social media management keeps a local business active, consistent, and professional on the networks your customers already use. Charlottetown, PEI, and wherever those customers scroll."
      >
        <Block title="Consistency is the work">
          <p>
            One handsome post doesn’t build a presence. A steady one does. People should be able to land on the feed and see a business that is open, current, and proud of what it does.
          </p>
          <p>
            We plan that rhythm with you, write in your voice, and keep the look from drifting week to week. No inflated promises about followers. The goal is to look like the business you actually are.
          </p>
        </Block>
        <Block title="What we handle">
          <PointList
            items={[
              "A realistic posting rhythm you can keep, not a sprint and a disappearance",
              "Posts and captions in the business’s voice",
              "A visual style that stays consistent",
              "A plain check-in on what’s worth repeating and what isn’t",
            ]}
          />
          <p>
            Social works harder when the website and the logo agree with it. If those need attention, start with{" "}
            <TextLink href="/website-design">website design</TextLink> or <TextLink href="/logo-design">logo design</TextLink>.
          </p>
          <p>Social media management is a custom quote. You’ll see the price before we begin.</p>
        </Block>
        <Block title="Built for local businesses">
          <p>
            A restaurant in Charlottetown, a trade in Summerside, a shop in Stratford: the customers are nearby, and they notice when a business looks neglected online. We keep the presence polished so a neighbour, or a visitor, doesn’t have to guess whether you’re still around.
          </p>
          <p>
            Island-wide context lives on the <TextLink href="/web-design-pei">web design PEI</TextLink> page. Capital-city websites live on{" "}
            <TextLink href="/website-design-charlottetown">website design in Charlottetown</TextLink>.
          </p>
        </Block>
        <Block title="Questions">
          <FaqList items={faqs} />
        </Block>
        <RelatedLinks
          links={[
            { href: "/website-design", label: "Website design", text: "The site the feed should point people toward." },
            { href: "/logo-design", label: "Logo design", text: "A mark the posts can actually use." },
            { href: "/website-maintenance", label: "Website care", text: "Keep the site as current as the feed." },
          ]}
        />
        <PageCta
          title="Let’s put the business back on the feed."
          text="Tell us where you show up now and how often you want to be there. You’ll get a direct reply from the person on the project."
          action="Talk about social"
        />
      </ContentPage>
    </Shell>
  )
}
