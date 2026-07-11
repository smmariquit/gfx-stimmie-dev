/**
 * Pubmat data.
 *
 * Each entry is one piece. Add your pubmats here:
 * - Drop the image file into /public/pubmats/
 * - Add an object below with at minimum { id, title, image }.
 *
 * The grid renders whatever's in this array.
 * When the array is empty, the site shows an empty-state message.
 */

/** @type {PubmatEntry[]} */
const pubmats = [
  {
    id: 'hack-and-yap',
    title: 'Hack & Yap',
    image: '/pubmats/hack-and-yap.png',
    date: '2026-02-28',
    org: 'Pizza & Friends x GitHub',
    description: 'Pubmat for Hack & Yap, a stupid ideas hackathon. Designed with a vibrant red background and playful elements.',
    tags: ['hackathon', 'event', 'poster'],
    category: 'pubmat',
  },
  {
    id: 'campfire-5-years',
    title: 'Campfire: 5 Years of Warmth',
    image: '/pubmats/campfire.png',
    date: '2026-10-23',
    org: 'HearthCraft',
    description: 'Campfire event celebrating 5 years of HearthCraft. Features a cozy outdoor theme with an anime-style mascot.',
    tags: ['anniversary', 'minecraft', 'server', 'event'],
    category: 'pubmat',
  },
];

export default pubmats;

/**
 * @typedef {Object} PubmatEntry
 * @property {string} id - URL-safe slug
 * @property {string} title
 * @property {string} image - Path relative to /public
 * @property {string} [date] - ISO-ish date string (YYYY-MM or YYYY-MM-DD)
 * @property {string} [org] - Organization / client
 * @property {string} [description] - Case study text, plain string
 * @property {string[]} [tags]
 * @property {string} [category] - For filtering (pubmat, poster, social, etc.)
 */
