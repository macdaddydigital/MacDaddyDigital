import { JsonLd } from "@/components/json-ld"
import { Shell } from "@/components/shell"
import { Block, ContentPage, FaqList, PageCta, RelatedLinks, TextLink } from "@/components/site-page"
import { faqSchema, pageMetadata, pageSeo, serviceSchema } from "@/lib/seo"

export const metadata = pageMetadata(pageSeo.maintenance)

const tiers = [
  {
    title: "Steady",
    text: "Small updates when you send them, a regular check that the site and the contact path still work, and a reply when something looks off.",
  },
  {
    title: "Active",
    text: "Scheduled updates, room for a new offer or section when the business changes, and faster help when a page breaks.",
  },
  {
    title: "Close",
    text: "Ongoing changes as the business moves: new pages, refreshes, and someone who already knows the site.",
  },
] as const

const faqs = [
  {
    question: "Do you disappear after launch?",
    answer:
      "No. A website is only the beginning. Care plans exist so updates, fixes, and improvements have somewhere to go.",
  },
  {
    question: "Can you look after a site you didn’t build?",
    answer:
      "Often, yes. We’ll look at it first and say whether we can take it on, or whether it needs a rebuild before care makes sense.",
  },
  {
    question: "How much does website maintenance cost?",
    answer:
      "Care is a custom quote. Each option above is priced for what’s included, and we confirm that price before it starts. New professional websites still start at $799. That price is for the site, not for ongoing care.",
  },
] as const

export default function WebsiteMaintenancePage() {
  return (
    <Shell>
      <JsonLd
        data={serviceSchema({
          name: "Website maintenance and support",
          serviceType: "Website maintenance",
          description: pageSeo.maintenance.description,
          path: pageSeo.maintenance.path,
          area: "both",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <ContentPage
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Website care", path: "/website-maintenance" },
        ]}
        eyebrow="After launch"
        title={
          <>
            We don’t disappear <em className="text-[#e8b84a] italic">after launch</em>
          </>
        }
        lede="A website is only useful if it stays current. Website maintenance is the updates, the fixes, and the support after the launch day applause. You still get a direct line to the person who knows the project."
      >
        <Block title="Care, in three shapes">
          <p>
            These are not price tags. Each one is a custom quote based on what’s included. We’ll confirm the number before anything starts. A new professional website, if you need one, still starts at $799.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {tiers.map((tier) => (
              <article key={tier.title} className="rounded-3xl border border-gold/25 bg-black/40 p-5">
                <h3 className="font-display text-2xl text-[#e8b84a]">{tier.title}</h3>
                <p className="mt-3 text-base text-muted">{tier.text}</p>
                <p className="mt-4 text-sm tracking-wide text-[#c6a36a] uppercase">Custom quote</p>
              </article>
            ))}
          </div>
        </Block>
        <Block title="What support actually means">
          <p>
            Launch day is a walkthrough and access, not a goodbye. After that, the business changes: a new service, a seasonal offer, a page that needs a correction, a form that stops sending.
          </p>
          <p>
            Care is how those changes get done without starting from zero each time. If the site is out of date enough that patches won’t help, we’ll say so and talk about{" "}
            <TextLink href="/website-design">website design</TextLink> instead.
          </p>
          <p>
            We look after sites for businesses in <TextLink href="/website-design-charlottetown">Charlottetown</TextLink> and{" "}
            <TextLink href="/web-design-pei">across PEI</TextLink>.
          </p>
        </Block>
        <Block title="Questions">
          <FaqList items={faqs} />
        </Block>
        <RelatedLinks
          links={[
            { href: "/website-design", label: "Website design", text: "When the site needs a proper rebuild, not another patch." },
            { href: "/social-media-management", label: "Social media", text: "Keep the public face as current as the site." },
            { href: "/contact", label: "Contact", text: "Tell us what the site is doing, or not doing." },
          ]}
        />
        <PageCta
          title="Hand us the site. We’ll keep it living."
          text="Tell us what you have and what keeps slipping. You’ll get a direct reply from the person on the project, and a custom quote before any care starts."
          action="Get a Free Quote"
        />
      </ContentPage>
    </Shell>
  )
}
