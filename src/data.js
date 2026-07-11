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
  // Example entry (uncomment and replace when adding real work):
  //
  // {
  //   id: 'sample-pubmat',
  //   title: 'Event Name — Pubmat',
  //   image: '/pubmats/sample.jpg',
  //   date: '2026-06',
  //   org: 'Organization Name',
  //   description: 'What this was for, context, design decisions.',
  //   tags: ['pubmat', 'event'],
  //   category: 'pubmat',
  // },
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
