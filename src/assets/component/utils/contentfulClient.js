import * as contentful from 'contentful';

export const contentfulClient = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFULL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFULL_KEY,
});

// console.log(contentfulClient);