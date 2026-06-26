export const site = {
  name: "Startup Setup",
  url: "https://startupsetup.in",
  description:
    "Startup Setup helps businesses manage leads, automate follow-ups, organize workflows, and centralize customer communication through operational lead management software.",
  image: "https://startupsetup.in/og-image.png",
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
