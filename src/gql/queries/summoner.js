import { gql } from '@apollo/client';

export const GET_SUMMONER = gql`
  query GetSummoner($name: String!) {
    summoner(name: $name) {
        name
        rank
        tier
        level
        profileIconId
        masteryScore
    }
  }
`;
