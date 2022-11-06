import gql from "graphql-tag";

export const FILMS_QUERY = gql`
  {
    allFilms {
      films {
        id
        title
        releaseDate
        producers
        director
        openingCrawl
      }
    }
  }
`;
