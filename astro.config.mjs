import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://bloodboy21.github.io",
  integrations: [
    starlight({
      title: "Analytics API",
      social: {
        github: "https://github.com/BloodBoy21/analyticAPI",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "API Reference",
          items: [
            {
              label: "Analytics",
              link: "/endpoints/analytics/",
            },
            {
              label: "Documents",
              link: "/endpoints/documents/",
            },
          ],
        },
      ],
    }),
  ],
});
