/**
 * About:
 * This method is fake replacement for the real fetch method in JavaScript.
 */

import Content from "fake-data/content.json";

interface iResponse {
  status: string;
  data: Array<any>;
}

export default async function fakeFetch(): Promise<iResponse> {
  const chanceToSucced = Math.floor(Math.random() * 10);
  let status: string = "pending";
  let data: Array<any> = [];

  await delay(1000);

  switch (chanceToSucced) {
    case 0:
      status = "error";
      break;
    case 1:
      data = [];
      status = "ok"; // if worked but there is not data
      break;
    default:
      data = Content;
      status = "ok";
  }

  return { status: status, data: data };
}

function delay(miliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
}
