import { gql } from '@apollo/client';

export const GET_MATCHES = gql`
  query GetMatches($name: String!) {
    summoner(name: $name) {
        name
        rank
        tier
        level
        profileIconId
        masteryScore
        puuid
    }
    matchHistory(name: $name) {
        info {
            gameCreation
            gameStartTimestamp
            gameDuration
            gameMode
            teams {
                TeamId
                win
            }
          	participants {
              puuid
              championName
              championId
              kills
              deaths
              assists
              goldEarned
              visionScore
              win
            }

        }
    }
  }
`
