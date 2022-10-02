/**
 * About:
 * This method is fake replacement for the real fetch method in JavaScript.
 */

import FakeContent from "fake-data/fake-content.json";

interface iResponse {
  status: string;
  data: Array<any>;
}

export default async function fakeFetch(): Promise<iResponse> {
  const chanceToSucced = Math.floor(Math.random() * 100);
  let status: string = "pending";
  let data: Array<any> = [];

  await delay(1000);

  if (chanceToSucced > 0) {
    data = FakeContent;
    status = "ok";
  } else {
    status = "error";
  }

  return { status: status, data: data };
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
