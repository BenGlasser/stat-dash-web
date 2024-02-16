import React, { createContext, useContext, useState } from 'react'
import Summoner from '../components/summoner'
import { Header, Content } from 'rsuite'
import Heading from '../components/heading'
import { motion } from 'framer-motion'
import { defaultSummoner } from '../util/defaults.js'
import MatchContainer from '../components/match_container.js'
import { useQuery } from '@apollo/client'
import { GET_MATCHES } from '../gql/queries/matches.js'

const SummonerContext = createContext(defaultSummoner);

const Home = ({ ...props }) => {

  const defaultFormValue = { summoner: '' }

  const [formValue, setFormValue] = useState(defaultFormValue)
  const [summonerName, setSummonerName] = useState('')
  const { loading, error, data = {} } = useQuery(GET_MATCHES, {
    variables: { name: summonerName }
  });
  const handleFormValue = (val) => setFormValue(val)

  const handleSubmit = (submitted, e) => {
    if (submitted) {
      console.log('search', formValue)
      console.log('summoner', summonerName)
      setSummonerName(formValue.summoner)
      setFormValue(defaultFormValue)
    }
  }

  return (
    <SummonerContext.Provider value={defaultSummoner}>
      <Header>
        <Heading
          formValue={formValue}
          handleFormValue={handleFormValue}
          handleSubmit={handleSubmit}
          defaultFormValue={defaultFormValue} />
      </Header>
      <Content>
        <motion.div layout style={{margin: '0 0 20px 0'}} >
          {summonerName && <Summoner 
            summonerName={summonerName} 
            loading={loading}
            error={error}
            data={data} />
          }
        </motion.div>
        <motion.div layout >
          {summonerName && <MatchContainer 
            summonerName={summonerName}             
            loading={loading}
            error={error}
            data={data} />
          }
        </motion.div>
      </Content>
    </SummonerContext.Provider>
  )
}

export default Home
