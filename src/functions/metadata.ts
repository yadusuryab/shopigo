import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
  noIndex?: boolean;
  keywords?: string[];
  author?: string;
  twitterHandle?: string;
  type?: "website" | "article" | "profile";
  locale?: string;
  alternates?: Record<string, string>;
  publishedTime?: string;
  modifiedTime?: string;
}

export const generateMetadata = ({
  title = `Launch Your Online Store with Shopigo – Just ₹500/month`,
  description = "Shopigo helps you build a professional online store in minutes. No coding. Just ₹500/month. Sell products, accept payments, and manage your business from anywhere.",
  image = "/thumbnail.png",
  icons = [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/icons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/icons/favicon-16x16.png",
    },
  ],
  noIndex = false,
  keywords = [
    "Shopigo",
    "₹500 website",
    "affordable website builder",
    "Indian ecommerce platform",
    "online store builder India",
    "Shopify alternative India",
    "start online business",
    "sell products online",
  ],
  author = "Shopigo Team",
  twitterHandle = "@getshopigo",
  type = "website",
  locale = "en_IN",
  alternates = {},
  publishedTime,
  modifiedTime,
}: MetadataProps = {}): Metadata => {
  const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://getshopigo.vercel.app");
  const imageUrl = image?.startsWith("http") ? image : new URL(image || "/thumbnail.png", metadataBase).toString();
  const canonicalUrl = metadataBase.toString();

  return {
    metadataBase,
    title: {
      default: title,
      template: `%s | Shopigo – ₹500/Month Store`,
    },
    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    publisher: "Shopigo",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons,

    openGraph: {
      type,
      siteName: "Shopigo",
      title,
      description,
      locale,
      alternateLocale: Object.keys(alternates),
      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      url: canonicalUrl,
    },

    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      site: twitterHandle,
      creator: twitterHandle,
      title,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },

    alternates: {
      canonical: canonicalUrl,
      languages: Object.entries(alternates).reduce(
        (acc, [lang, url]) => ({ ...acc, [lang]: url }),
        {} as Record<string, string>
      ),
    },
  };
};
