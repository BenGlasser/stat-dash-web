import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from "@apollo/client";
import { GET_SUMMONER } from '../gql/queries/summoner';
import { Col, Placeholder, Avatar, Panel, FlexboxGrid } from 'rsuite';

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
    },
    img: {
        height: '100px',
        width: '100px'
    },
    panel: {
        margin: 'auto',
        minWidth: '600px',
        maxWidth: '600px',
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

    },
    title: {
        marginLeft: '100px'
    },
    summonerName: {
        textShadow: '#FC0 1px 0 15px'
    }
}

const profile_icon = (id) => `http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${id}.png`

const Summoner = ({ summonerName, data, loading, error }) => {
    
    const skeleton = (<Placeholder.Paragraph style={{ marginTop: 30 }} rows={3} graph="circle" active />)

    if (loading) return skeleton
    if (error) return

    const { summoner = {} } = data
    const { name = '', rank = '', level = '', profileIconId = '', masteryScore = '', tier = '' } = summoner


    const panelHeader = ({ level = '', rank = '', tier = '', masteryScore }) => {
        return (
            <div>
                <FlexboxGrid justify="start" align="bottom">
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
                    <FlexboxGrid.Item style={styles.title} as={Col}>
                        <h2 style={styles.summonerName}>{name}</h2>
                        <h4>{`${tier} ${rank}`}</h4>
                        {masteryScore && <h5>{`Mastery Score: ${masteryScore}`}</h5>}
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </div>
        )
    }

    return (
        <div>
            <Panel styles={styles.panel}>
                {panelHeader(summoner)}
            </Panel>
        </div>
    );
};

export default Summoner;