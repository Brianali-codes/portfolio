import Parser from "rss-parser";

const parser = new Parser();

export async function handler() {
  try {
    const feed = await parser.parseURL("https://medium.com/feed/@gamerfunky78");
    return {
      statusCode: 200,
      body: JSON.stringify(feed.items),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch feed" }),
    };
  }
}
