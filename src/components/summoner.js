import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_SUMMONER } from '../gql/queries/summoner';
import Home from '../pages/Home';

const Summoner = ({ name }) => {
    const { loading, error, data } = useQuery(GET_SUMMONER, {
        variables: { name: name },
    });
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data);
    const { id, accountId, profileIconId, puuid, revisionDate, summonerLevel } = data.summoner;
    
    return (
        <div>
            <h1>Summoner Data</h1>
            <p>ID: {id}</p>
            <p>Account ID: {accountId}</p>
            <p>Profile Icon ID: {profileIconId}</p>
            <p>PUUID: {puuid}</p>
            <p>Revision Date: {revisionDate}</p>
            <p>Summoner Level: {summonerLevel}</p>
        </div>
    );
};

export default Summoner;