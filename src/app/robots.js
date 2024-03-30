export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/authors/cfp', '/authors/format'],
            }
        ],
        sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`
    }
}