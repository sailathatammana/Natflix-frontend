// Fake data
import Content from "./fake-data/content.json";
import Movies from "./fake-data/movies.json";
import Documentaries from "./fake-data/documentaries.json";
import Series from "./fake-data/series.json";
import SingleDocumentary from "./fake-data/singleDocumentary.json";
import SingleMovie from "./fake-data/singleMovie.json";
import SingleSerie from "./fake-data/singleSerie.json";

// Project files
import iDetailsOther from "interfaces/iDetailsOther";
import iDetailsSeries from "interfaces/iDetailsSeries";
import iContent from "interfaces/iContent";

export default function fakeServer(endPoint: string, data: any = null): any {
  switch (endPoint) {
    // Content
    case "content/":
      return Content;
    case "content/create":
      return contentCreate(data);
    case "content/delete":
      return contentDelete(data);
    case "content/update":
      return contentUpdate(data);

    // Content filtered
    case "content/series":
      return Series;
    case "content/movies":
      return Movies;
    case "content/documentaries":
      return Documentaries;

    // Details others
    case "details-other/:id":
      return detailsOther(data);
    case "details-other/:id/update":
      return detailsOtherUpdate(data);

    // Details series
    case "details-series/:id":
      return detailsSeries(data);

    // Exception
    default:
      throw new Error(`invalid endpoint ${endPoint}`);
  }
}

// Content
function contentCreate(item: iContent): string {
  return `Created new content ${item.title}`;
}

function contentUpdate(id: number): string {
  return `Updated content with id ${id}`;
}

function contentDelete(id: number): string {
  return `Deleted content with id ${id}`;
}

// Details other
function detailsOther(id: number): iDetailsOther {
  const content = Content.filter((item) => item.id === Number(id))[0];

  switch (content.type_id) {
    case 2:
      return SingleMovie;
    case 3:
      return SingleDocumentary;
    default:
      throw new Error(`Invalid type id ${id}`);
  }
}

function detailsOtherUpdate(item: iDetailsOther): string {
  return `Update details id ${item.id}`;
}

// Details series
function detailsSeries(id: number): iDetailsSeries[] {
  const content = Content.filter((item) => item.id === id)[0];

  switch (content.type_id) {
    case 1:
      return SingleSerie;
    default:
      throw new Error(`Invalid type id ${id}`);
  }
}
