import Parser from "rss-parser";
import type { Handler } from "@netlify/functions";

const parser = new Parser();

export const handler: Handler = async () => {
  try {
    const feed = await parser.parseURL("https://medium.com/feed/@gamerfunky78");

    return {
      statusCode: 200,
      body: JSON.stringify(feed.items),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch feed",
        details: error.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
