import { JsonLd } from "@/components/json-ld"
import { Shell } from "@/components/shell"
import { Block, ContentPage, FaqList, PageCta, PointList, RelatedLinks, TextLink } from "@/components/site-page"
import { faqSchema, pageMetadata, pageSeo, serviceSchema } from "@/lib/seo"

export const metadata = pageMetadata(pageSeo.logoDesign)

const faqs = [
  {
    question: "Is it just a logo file?",
    answer:
      "No. A file on its own is easy to misuse. You get a mark plus direction for colour, type, and how it should show up on a sign, a site, and a post.",
  },
  {
    question: "What if we already have a name?",
    answer: "Good. We design for that name. We don’t invent a new business to make the logo easier.",
  },
  {
    question: "How is logo design priced?",
    answer:
      "Logo and brand work is a custom quote. We’ll confirm the price before anything starts. Professional websites, if you need one too, start at $799.",
  },
] as const

export default function LogoDesignPage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: "Logo design PEI",
          serviceType: "Logo design and brand identity",
          description: pageSeo.logoDesign.description,
          path: pageSeo.logoDesign.path,
          area: "both",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <ContentPage
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Logo design", path: "/logo-design" },
        ]}
        eyebrow="Brand identity"
        title={
          <>
            A logo people can <em className="text-[#e8b84a] italic">pick out</em>
          </>
        }
        lede="A business needs more than a logo. It needs something recognizable. Logo design in PEI should give you a mark, a set of colours, and a way of showing up that doesn’t blend into every other sign on the road."
      >
        <Block title="More than a file">
          <p>
            The logo is the mark. The brand is what people remember: the mark, the colours, the way the name sits, and how it holds up on a truck, a website, and a small square on a phone.
          </p>
          <p>
            We design for businesses that are tired of looking interchangeable. The name’s loud. The work is careful. That applies here too.
          </p>
          <p>
            When the mark is ready, it should have a home. Many projects continue into{" "}
            <TextLink href="/website-design">website design</TextLink> or{" "}
            <TextLink href="/social-media-management">social media</TextLink> so the brand doesn’t stop at one image.
          </p>
        </Block>
        <Block title="What’s included">
          <PointList
            items={[
              "A mark that holds up small, on a sign, and on a website",
              "Colour and type direction so the brand doesn’t fall apart the moment it leaves the logo",
              "Files you can hand to a printer or put on the site",
              "Plain notes on how to use it, and how not to",
            ]}
          />
          <p>This is a custom quote. You’ll know the price before we start.</p>
        </Block>
        <Block title="Who it’s for">
          <p>
            New businesses on Prince Edward Island that need a first impression with a spine. Established ones whose old logo looks tired next to the work they actually do. Shops, trades, practices, and anyone whose name should be recognized in Charlottetown and beyond.
          </p>
          <p>
            If the customers are mostly in the capital, the <TextLink href="/website-design-charlottetown">Charlottetown website design</TextLink> page is the companion. If they are spread across the Island, start with{" "}
            <TextLink href="/web-design-pei">web design PEI</TextLink>.
          </p>
        </Block>
        <Block title="Questions">
          <FaqList items={faqs} />
        </Block>
        <RelatedLinks
          links={[
            { href: "/website-design", label: "Website design", text: "Give the mark a site that lives up to it." },
            { href: "/social-media-management", label: "Social media", text: "Use the brand where people already scroll." },
            { href: "/about", label: "About the studio", text: "How we work, without the agency fog." },
          ]}
        />
        <PageCta
          title="Bring the name. We’ll give it a shape."
          text="Tell us about the business and where the logo needs to live. You’ll get a direct reply from the person on the project."
          action="Ask about a logo"
        />
      </ContentPage>
    </Shell>
  )
}
