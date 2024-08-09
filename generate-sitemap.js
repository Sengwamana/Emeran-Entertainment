const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Define your website's base URL
const baseUrl = 'https://emeran-entertainment.vercel.app/';

// Create an array of your website's routes
const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/movies', changefreq: 'weekly', priority: 0.9 },
    // Add more routes as needed
];

// Initialize the SitemapStream
const sitemap = new SitemapStream({ hostname: baseUrl });

// Create a writable stream to `public/sitemap.xml`
const writeStream = createWriteStream('./public/sitemap.xml');

// Pipe the stream to write the sitemap file
sitemap.pipe(writeStream);

// Loop through the pages and add them to the sitemap
pages.forEach(page => sitemap.write(page));

// End the sitemap stream
sitemap.end();

// Convert the stream to a promise and log the result
streamToPromise(sitemap)
    .then(() => console.log('Sitemap generated successfully.'))
    .catch((err) => console.error('Error generating sitemap:', err));
