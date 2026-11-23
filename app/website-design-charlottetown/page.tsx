import { JsonLd } from "@/components/json-ld"
import { Shell } from "@/components/shell"
import { Block, ContentPage, FaqList, PageCta, PointList, RelatedLinks, TextLink } from "@/components/site-page"
import { faqSchema, pageMetadata, pageSeo, serviceSchema } from "@/lib/seo"

export const metadata = pageMetadata(pageSeo.charlottetown)

const faqs = [
  {
    question: "Can we meet in Charlottetown?",
    answer:
      "Yes, when a conversation on the Island is the useful way to start. Most of the project still runs with calls, shared previews, and notes. We don’t publish a street address.",
  },
  {
    question: "Do you only work in Charlottetown?",
    answer:
      "No. Charlottetown is home base. We also design for businesses across Prince Edward Island, and for clients elsewhere when the project is a fit.",
  },
  {
    question: "What does a Charlottetown business website cost?",
    answer:
      "Professional websites start at $799. A larger build is a custom quote, confirmed before any work starts.",
  },
] as const

export default function CharlottetownPage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: "Website design in Charlottetown",
          serviceType: "Website design",
          description: pageSeo.charlottetown.description,
          path: pageSeo.charlottetown.path,
          area: "charlottetown",
          priceFrom: 799,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <ContentPage
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Website design", path: "/website-design" },
          { name: "Charlottetown", path: "/website-design-charlottetown" },
        ]}
        eyebrow="Charlottetown, PEI"
        title={
          <>
            Website design for <em className="text-[#e8b84a] italic">Charlottetown</em>
          </>
        }
        lede="A business in the capital has to look solid to a neighbour and to someone who just got off the bridge. We design websites for Charlottetown companies that are done looking generic."
      >
        <Block title="Who this is for">
          <p>
            Shops and restaurants that live on regulars and on visitors. Trades and professional offices that get judged before the first call. New businesses that need a proper first impression in Charlottetown, not a placeholder.
          </p>
          <p>
            Downtown, the waterfront season, the year-round local trade: the mix is specific. A site for a Charlottetown business should respect that. It should also say, clearly, what you do when the visitor is in a hurry.
          </p>
          <PointList
            items={[
              "The offer, in language a local and a visitor can both follow",
              "A look that belongs to the business",
              "A phone-friendly layout, because that’s how a lot of people will check you",
              "A clear way to call, book, or write",
            ]}
          />
        </Block>
        <Block title="In the city, not a generic studio page">
          <p>
            MacDaddy Digital is based in Charlottetown, Prince Edward Island. We can meet on the Island when that helps the project. We don’t invent a storefront address or pretend to be on every corner.
          </p>
          <p>
            The work itself is the same standard as our <TextLink href="/website-design">website design for small businesses</TextLink>: careful, direct, and built to earn trust. Professional websites start at $799. If the customers are spread past the capital, the{" "}
            <TextLink href="/web-design-pei">PEI web design</TextLink> page is the wider view, including Summerside, Stratford, Cornwall, and Montague.
          </p>
          <p>
            A Charlottetown site often needs a mark that holds up on a sign and a window. That’s <TextLink href="/logo-design">logo design</TextLink>. After launch,{" "}
            <TextLink href="/website-maintenance">website care</TextLink> keeps the pages from going stale between seasons.
          </p>
        </Block>
        <Block title="Questions">
          <FaqList items={faqs} />
        </Block>
        <RelatedLinks
          links={[
            { href: "/website-design", label: "Website design", text: "The full offer for small-business sites." },
            { href: "/web-design-pei", label: "Web design PEI", text: "Coverage across Prince Edward Island." },
            { href: "/contact", label: "Contact", text: "Tell us about the Charlottetown business." },
          ]}
        />
        <PageCta
          title="Charlottetown deserves a better website than boring."
          text="Tell us about the business. You’ll get a direct reply from the person on the project."
          action="Start a Charlottetown site"
        />
      </ContentPage>
    </Shell>
  )
}
