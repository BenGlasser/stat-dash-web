import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from "@apollo/client";
import { GET_SUMMONER } from '../gql/queries/summoner';
import { Row, Col, Placeholder, Avatar, Panel, FlexboxGrid } from 'rsuite';

const styles = {
    avatarContainer: {
        display: 'block',
        width: '100px',
        height: '100px',
        marginLeft: '50px',
        marginTop: '50px',
        position: 'relative'
    },
    avatar: {
        height: '100px',
        width: '100px',
        border: '2px solid #00A4BD',
        borderRadius: '50px'
    },
    wings: {
        width: '160%',
        height: '160%',
        position: 'absolute',
        bottom: '-20px',
        left: '-36px',
    },
    levelBadge: {
        // display: 'flex',
        backgroundColor: 'var(--rs-body)',
        border: '2px solid #00A4BD',
        borderRadius: '5px',
        color: 'white',
        display: 'inline-block',
        padding: '2.5px 10px',
        position: 'absolute',
        width: '25px',
        height: '15px',
        margin: '-25px 24px'
    },
    level: {
        display: 'flex',
        fontSize: '15px',
        fontWeight: 'bold',
        width: '25px',
        height: '15px',
        margin: 'auto',
        color: 'var(--rs-primary-50)',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '10px',
    },
    img: {
        height: '100px',
        width: '100px'
    },
    panel: {
        margin: 'auto',
        minWidth: '600px'
    },
    rankDiv: {
        width: '100px',
        height: '100px',
        overflow: 'hidden'
    },
    rankImg: {
        width: '300px',
        height: '200px',
        margin: '-50px 0px 0px -100px'

    }

}

const profile_icon = (id) => `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${id}.png`

const Summoner = ({ summonerName }) => {
    const { loading, data = {} } = useQuery(GET_SUMMONER, {
        variables: { name: summonerName }
    });

    const { summoner = {} } = data
    const { name = '', rank = '', level = '', profileIconId = '', masteryScore = '', tier='' } = summoner

    const skeleton = (
        <div>
            <h1>Summoner Data</h1>
            <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} graph="circle" active />
        </div>
    )

    if (loading) return skeleton

    const panelHeader = (level) => {
        return (
            <div>
                <FlexboxGrid justify="space-between" align="middle">
                    <FlexboxGrid.Item as={Col} style={styles.avatarContainer}>
                        <Avatar
                            circle
                            src={profile_icon(profileIconId)}
                            alt={name}
                            style={styles.avatar}
                            imgProps={{ style: styles.img }}
                        >
                        </Avatar>
                        <div style={styles.wings}>
                                <img src={`/ranked-emblem/wings_${tier}.png`} alt="wings" style={styles.wings} />
                            </div>
                        <div style={styles.levelBadge}>
                            <div style={styles.level}>{level}</div >
                        </div>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item as={Col}>
                        <h2>{name}</h2>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item as={Col} />
                </FlexboxGrid>
            </div>
        )
    }

    return (
        <div>
            <h1>Summoner Data</h1>
            <Panel header={panelHeader(level)} style={styles.panel} bordered>
                <div style={styles.rankDiv}>
                    {rank && <img src={`/ranked-emblem/emblem-${tier}.png`} alt={name} style={styles.rankImg}/>}
                </div>
                <p>Name: {name}</p>
                <p>Profile Icon ID: {profileIconId}</p>
                <p>Summoner Level: {level}</p>
                <p>Rank: {rank}</p>
                <p>Teir: {tier}</p>
                <p>Mastery Score: {masteryScore}</p>
            </Panel>
        </div>
    );
};

export default Summoner;