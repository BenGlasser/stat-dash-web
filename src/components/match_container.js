import React from 'react';
import { useQuery } from '@apollo/client';
import { Panel } from 'rsuite';
import MatchTable from './match_table';
import { GET_MATCHES } from '../gql/queries/matches';
import { Placeholder } from 'rsuite';
import ErrorMessage from './error_msg';

const MatchContainer = ({ summonerName, loading, error, data }) => {

    const skeleton = ( <Placeholder.Grid rows={10} columns={10} active /> )

    if (loading) return skeleton
    if (error) return <ErrorMessage/>

    const {
        matchHistory,
        summoner: { puuid }
    } = data


    // # Date and time played
// # Game mode (Ranked, Normal, etc.)
// # Champion played
// # Win/Loss outcome
// # Key stats: kills, deaths, assists, gold earned, vision score
// # Bonus points:
// # Sorting and filtering options: date, game mode, champion, win/loss
// # Pagination for managing long match histories
// # Optional: Hovering over a match shows detailed stats popup
    const tableData = matchHistory?.map(({ info }, index) => {
        const { gameCreation, gameDuration, gameMode, participants } = info
        const { kills, deaths, assists, goldEarned, visionScore, win, championName, championId } = participants.find(p => p.puuid === puuid)
        console.log({win})
        return {
            index,
            gameCreation: new Date(gameCreation).toLocaleString(),
            gameDuration,
            gameMode,
            win: win ? 'Win' : 'Loss',
            kills,
            deaths,
            assists,
            goldEarned,
            visionScore,
            championName,
            championId
        }
        
    })

    return (
    // date, 
    // duration, 
    // game mode, 
    // champion,
    // win/loss,
    // kills, 
    // deaths,
    // assists,
    // gold earned,
    // vision score
        <Panel>
            <MatchTable tableData={tableData}/>
        </Panel>
    );
};

export default MatchContainer;
