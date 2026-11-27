import { Shell } from "@/components/shell"
import { Block, ContentPage, PageCta, RelatedLinks, TextLink } from "@/components/site-page"
import { pageMetadata, pageSeo } from "@/lib/seo"

export const metadata = pageMetadata(pageSeo.about)

export default function AboutPage() {
  return (
    <Shell>
      <ContentPage
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        eyebrow="MacDaddy Digital"
        title={
          <>
            Built <em className="text-[#e8b84a] italic">different</em>
          </>
        }
        lede="We help small businesses look as capable online as they are in person. Websites, brands, and the digital pieces around them. Charlottetown, Prince Edward Island."
      >
        <Block title="The gap we work on">
          <p>
            Most small businesses don’t have a boring product. They have a boring website, a forgettable logo, or a social feed that went quiet. MacDaddy Digital was built for that gap.
          </p>
          <p>
            Whether you’re starting from scratch or replacing an outdated presence, we create digital work that actually represents the business. Someone should understand what you do, trust it, and know what to do next.
          </p>
          <p className="border-l-2 border-[#e8b84a] pl-5 font-display text-3xl leading-tight text-[#e8b84a] italic sm:text-4xl">
            The name’s loud. The work is careful.
          </p>
        </Block>
        <Block title="How we work with you">
          <p>
            No middleman. You get a direct line to the person building your project. No account managers, no confusing handoffs, and no getting lost in a big agency system.
          </p>
          <p>
            We ask plain questions. We show the work before it goes live. We stay reachable after launch. We don’t disappear, and we don’t bury a simple job in a process that exists to sound important.
          </p>
          <p>
            Creativity here has a job. A sharp idea is useless if the site is confusing or the logo falls apart on a sign. Problem-solving means the page, the mark, or the feed has to help the business stand out. Looking like every other template is the failure.
          </p>
        </Block>
        <Block title="Where we are">
          <p>
            Home base is Charlottetown, Prince Edward Island. We design for businesses in the capital and for towns across the Island, from Summerside and Cornwall to Stratford and Montague. We can meet on the Island when a conversation in person helps. A lot of the work happens with calls, shared previews, and written notes.
          </p>
          <p>
            Where you live doesn’t decide whether we can work together. If you want the local detail, read{" "}
            <TextLink href="/website-design-charlottetown">website design in Charlottetown</TextLink> or{" "}
            <TextLink href="/web-design-pei">web design PEI</TextLink>.
          </p>
        </Block>
        <RelatedLinks
          links={[
            { href: "/website-design", label: "Website design", text: "Professional sites for small businesses, from $799." },
            { href: "/logo-design", label: "Logo design", text: "A recognizable mark, not a forgettable file." },
            { href: "/website-maintenance", label: "Website care", text: "Support after launch. We don’t disappear." },
          ]}
        />
        <PageCta
          title="If the business deserves better, start there."
          text="Tell us what you’re thinking. You’ll get a direct reply from the person on the project."
          action="Get a Free Quote"
        />
      </ContentPage>
    </Shell>
  )
}
