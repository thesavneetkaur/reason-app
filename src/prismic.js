import * as prismic from "@prismicio/client";

export const repositoryName = "savneet";

export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.REACT_APP_PRISMIC_TOKEN,
});
