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
        <Panel>
            <MatchTable tableData={tableData}/>
        </Panel>
    );
};

export default MatchContainer;
