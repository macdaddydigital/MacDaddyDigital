import { JsonLd } from "@/components/json-ld"
import { Shell } from "@/components/shell"
import { Block, ContentPage, FaqList, PageCta, PointList, RelatedLinks, TextLink } from "@/components/site-page"
import { faqSchema, pageMetadata, pageSeo, serviceSchema } from "@/lib/seo"

export const metadata = pageMetadata(pageSeo.websiteDesign)

const faqs = [
  {
    question: "What does a website starting at $799 include?",
    answer:
      "A professional small-business website: the pages you need to explain the work, show the business, and give people a way to reach you. A larger site, a shop, or a custom build is quoted before it starts.",
  },
  {
    question: "Do you write the words?",
    answer:
      "We help shape them. You know the business. We help it read clearly, in an order a visitor can follow.",
  },
  {
    question: "Can you refresh a site I already have?",
    answer:
      "Often, yes. We’ll look at what you have and say whether a refresh is enough or a rebuild is the better spend.",
  },
  {
    question: "What happens after the site launches?",
    answer:
      "You get a walkthrough and access. We don’t disappear. Website care is available when you want updates, fixes, or changes as the business grows.",
  },
] as const

export default function WebsiteDesignPage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: "Website design for small businesses",
          serviceType: "Website design",
          description: pageSeo.websiteDesign.description,
          path: pageSeo.websiteDesign.path,
          area: "both",
          priceFrom: 799,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <ContentPage
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Website design", path: "/website-design" },
        ]}
        eyebrow="Charlottetown, PEI"
        title={
          <>
            Website design for <em className="text-[#e8b84a] italic">small businesses</em>
          </>
        }
        lede="A small business should not have to look small online. We design websites that explain the work, earn trust, and give people a clear next step. Professional websites start at $799."
      >
        <Block title="What you get">
          <p>
            Website design for small businesses is not a pile of pages. It’s a site that sounds like the business and makes the offer easy to understand.
          </p>
          <PointList
            items={[
              "A structure built around how your customers actually decide",
              "Design that belongs to the business, not a template from down the street",
              "A layout that holds up on a phone",
              "A straightforward way for people to reach you",
              "A walkthrough when the site goes live",
            ]}
          />
          <p>
            Bigger builds are a custom quote. We’ll confirm the price before anything starts. If the site also needs a mark people remember, see{" "}
            <TextLink href="/logo-design">logo design</TextLink>. If it needs to stay current, see{" "}
            <TextLink href="/website-maintenance">website care</TextLink>.
          </p>
        </Block>
        <Block title="Why it matters">
          <p>People check a business before they call, book, or walk in. A vague site makes a capable business look unsure.</p>
          <p>
            A clear site does the opposite. It shows what you do, who it’s for, and why someone should trust you with the job. That is the whole point of the work.
          </p>
          <p>
            We do this for businesses in <TextLink href="/website-design-charlottetown">Charlottetown</TextLink> and{" "}
            <TextLink href="/web-design-pei">across Prince Edward Island</TextLink>, and for clients farther away when the project is a fit.
          </p>
        </Block>
        <Block title="How a project runs">
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl text-[#f7f2ea]">1. The plain version</h3>
              <p className="mt-2">What the business does, who it’s for, and what the site needs to accomplish. A polished brief is optional.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-[#f7f2ea]">2. Shape and words</h3>
              <p className="mt-2">We design the pages and help the copy say the true thing, in the right order.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-[#f7f2ea]">3. Your review</h3>
              <p className="mt-2">You see the site before it goes live. You tell us what to change. We change it.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-[#f7f2ea]">4. Launch, then a way back</h3>
              <p className="mt-2">A walkthrough, access, and a direct line if something needs an update later.</p>
            </div>
          </div>
        </Block>
        <Block title="Questions">
          <FaqList items={faqs} />
        </Block>
        <RelatedLinks
          links={[
            { href: "/website-design-charlottetown", label: "Charlottetown", text: "Website design for businesses in the capital." },
            { href: "/web-design-pei", label: "Prince Edward Island", text: "Web design for towns across the Island." },
            { href: "/logo-design", label: "Logo design", text: "A mark people can recognize, not just a file." },
          ]}
        />
        <PageCta
          title="Tell us what the site needs to do."
          text="You’ll get a direct reply from the person on the project. Professional websites start at $799. Larger work is quoted first."
          action="Get a Free Quote"
        />
      </ContentPage>
    </Shell>
  )
}
