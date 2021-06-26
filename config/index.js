export const hostURL = "https://listing-template.vercel.app";
export const appTitleSmall = "Listing Site Template";
export const appTitle = "Listing Site Template";
export const description = "Listing Site Template";

export const headConfig = {
  title: appTitle,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: description }
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
};

export const pwaConfig = {
  meta: {
    name: appTitleSmall,
    description,
    ogHost: hostURL,
    ogImage: "/social.png",
    twitterCard: "summary_large_image",
    twitterSite: "@fayazara",
    twitterCreator: "@fayazara"
  },
  manifest: {
    lang: "en",
    name: appTitle,
    short_name: appTitleSmall
  }
};
