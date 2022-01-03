export const GA_TRACKING_ID = "G-XP9P7PGN8J"

export const pageview = (url) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    })
}
