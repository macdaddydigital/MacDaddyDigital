import { JsonLd } from "@/components/json-ld"
import { Shell } from "@/components/shell"
import { Block, ContentPage, FaqList, PageCta, PointList, RelatedLinks, TextLink } from "@/components/site-page"
import { faqSchema, pageMetadata, pageSeo, serviceSchema } from "@/lib/seo"

export const metadata = pageMetadata(pageSeo.pei)

const faqs = [
  {
    question: "Do you work outside Charlottetown?",
    answer:
      "Yes. Charlottetown is home base. We design for businesses across Prince Edward Island, including Summerside, Stratford, Cornwall, Montague, and the smaller communities between them.",
  },
  {
    question: "Can you meet somewhere other than Charlottetown?",
    answer:
      "We can meet on the Island when that is the useful way to start. Distance between towns doesn’t decide the work. A lot of projects run on calls, shared previews, and notes, which suits owners who are already on the road.",
  },
  {
    question: "What if I’m not on PEI?",
    answer:
      "We still take projects elsewhere. Where you live doesn’t decide whether we can work together. Tell us what you need and we’ll say if it’s a fit.",
  },
] as const

export default function PeiWebDesignPage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: "Web design PEI",
          serviceType: "Web design",
          description: pageSeo.pei.description,
          path: pageSeo.pei.path,
          area: "pei",
          priceFrom: 799,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <ContentPage
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Website design", path: "/website-design" },
          { name: "Prince Edward Island", path: "/web-design-pei" },
        ]}
        eyebrow="Prince Edward Island"
        title={
          <>
            Web design across <em className="text-[#e8b84a] italic">PEI</em>
          </>
        }
        lede="Charlottetown is home base. The work is for the Island. A business in Summerside, Stratford, Cornwall, or Montague deserves the same careful website as one on a downtown street in the capital."
      >
        <Block title="One Island, different towns">
          <p>
            Web design PEI is not a single template with the town name swapped. Summerside has its own downtown and its own customers. Stratford and Cornwall sit close to Charlottetown and still need a site that isn’t an afterthought of the capital. Montague, Souris, Kensington, and the communities between them often run on trust and word of mouth.
          </p>
          <p>
            A clear website backs that trust up when someone searches, or when a neighbour sends a link. It should explain the work, show the business properly, and make it easy to get in touch.
          </p>
          <PointList
            items={[
              "Professional websites for Island businesses, starting at $799",
              "Words and design that sound like the business, not like a brochure for nowhere",
              "A layout people can use on a phone between towns",
              "Care after launch, so the site doesn’t go quiet in the off-season or the busy one",
            ]}
          />
        </Block>
        <Block title="What sits around the website">
          <p>
            Some businesses need the site first. Some need the name to be recognizable before the site can carry it. <TextLink href="/logo-design">Logo design</TextLink> covers the mark and the direction around it.{" "}
            <TextLink href="/social-media-management">Social media management</TextLink> keeps a local business looking active between jobs.{" "}
            <TextLink href="/website-maintenance">Website maintenance</TextLink> is how we stay after launch.
          </p>
          <p>
            If the business is specifically in the capital, <TextLink href="/website-design-charlottetown">website design in Charlottetown</TextLink> goes deeper on that city. The broader small-business offer is on{" "}
            <TextLink href="/website-design">website design</TextLink>.
          </p>
          <p>
            We can meet on Prince Edward Island when a face-to-face start helps. We don’t list a street address, and we don’t pretend a drive to Montague or Summerside is a reason to turn a project down.
          </p>
        </Block>
        <Block title="Questions">
          <FaqList items={faqs} />
        </Block>
        <RelatedLinks
          links={[
            { href: "/website-design-charlottetown", label: "Charlottetown", text: "Website design for businesses in the capital." },
            { href: "/website-design", label: "Website design", text: "What a small-business site includes, from $799." },
            { href: "/about", label: "About", text: "The studio behind the work. Direct, and careful." },
          ]}
        />
        <PageCta
          title="If you’re on the Island, the site should prove it."
          text="Tell us the town and the business. You’ll get a direct reply from the person on the project."
          action="Get a Free Quote"
        />
      </ContentPage>
    </Shell>
  )
}
