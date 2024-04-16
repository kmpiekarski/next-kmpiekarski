// Set a variable that contains all the fields needed for works when a fetch for
// content is performed
const WORKS_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  name
  type
  image {
    url
  }
  link
  role
  date
  category
  ageLimit
`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for works with an "works" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ['works'] },
    }
  ).then((response) => response.json())
}

function extractWorkEntries(fetchResponse) {
  return fetchResponse?.data?.worksCollection?.items
}

export async function getAllWorks(isDraftMode = false) {
  const works = await fetchGraphQL(
    `query {
        worksCollection(where:{ category: "Discography" }, order: date_DESC, preview: ${
          isDraftMode ? 'true' : 'false'
        }) {
          items {
            ${WORKS_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  )
  return extractWorkEntries(works)
}

export async function getWork(isDraftMode = false) {
  const work = await fetchGraphQL(
    `query {
        worksCollection(where:{ category: "Discography" }, order: date_DESC, {preview: ${isDraftMode ? 'true' : 'false'}) {
          items {
            ${WORKS_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  )
  return extractWorkEntries(work)[0]
}
