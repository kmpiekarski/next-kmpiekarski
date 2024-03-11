// Set a variable that contains all the fields needed for articles when a fetch for
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
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ['articles'] },
    }
  ).then((response) => response.json())
}

function extractWorkEntries(fetchResponse) {
  return fetchResponse?.data?.worksCollection?.items
}

export async function getAllWorks(
  // For this demo set the default limit to always return 3 articles.
  limit = 3,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const articles = await fetchGraphQL(
    `query {
        worksCollection(order: date_DESC, limit: ${limit}, preview: ${
          isDraftMode ? 'true' : 'false'
        }) {
          items {
            ${WORKS_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  )
  return extractWorkEntries(articles)
}

export async function getWork(isDraftMode = false) {
  const article = await fetchGraphQL(
    `query {
        worksCollection(where:{limit: 1, preview: ${
          isDraftMode ? 'true' : 'false'
        }) {
          items {
            ${WORKS_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  )
  return extractWorkEntries(article)[0]
}
