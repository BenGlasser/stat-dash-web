import { gql } from '@apollo/client';

export const GET_SUMMONER = gql`
  query GetSummoner($name: String!) {
    summoner(name: $name) {
		id
        accountId
        profileIconId
        puuid
        revisionDate
        summonerLevel
    }
  }
`;
