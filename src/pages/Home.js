import React, { useState, useRef } from 'react'
import Summoner from '../components/summoner'
import { Form, FlexboxGrid, Input, InputGroup, Row } from 'rsuite'
import SearchIcon from '@rsuite/icons/Search'
import { motion } from 'framer-motion'

const styles = {
  header: {
    width: '100%',
    padding: '20px'
  },
  input: {
    margin: 'auto'
  }
}

const Home = ({ ...props }) => {
  const defaultFormValue = { summoner: '' }

  const [formValue, setFormValue] = useState(defaultFormValue)
  const [summonerName, setSummonerName] = useState('')

  const handleFormValue = (val) => setFormValue(val)

  const handleSubmit = (submitted, e) => {
    console.log('submit', submitted)
    console.log('eff', e)
    if (submitted) {
      console.log('search', formValue)
      console.log('summoner', summonerName)
      setSummonerName(formValue.summoner)
      setFormValue(defaultFormValue)
    }
  }

  return (
    <div style={styles.page}>
      <FlexboxGrid justify="start" style={styles.header}>
        <FlexboxGrid.Item colspan={12}>
          <h1>Stat Dash</h1>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item style={styles.input} colspan={12}>
          <Form
            formDefaultValue={formValue}
            onChange={handleFormValue}
            onSubmit={handleSubmit}
            formValue={formValue}
          >
            <InputGroup inside>
              <Form.Control
                placeholder='Search for summoner...'
                name="summoner" />
              <InputGroup.Button type='submit'>
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>
          </Form>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <motion.div animate={{ x: 100 }}>
        <Summoner summonerName={summonerName} />
      </motion.div>
    </div>

  )
}

export default Home
