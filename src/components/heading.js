import React, { useState, useRef } from 'react'
import { Form, FlexboxGrid, InputGroup} from 'rsuite'
import SearchIcon from '@rsuite/icons/Search'

const styles = {
  header: {
    width: '100%',
    padding: '20px'
  },
  input: {

    maxWidth: '200px'
  }
}

const Home = ({formValue, handleFormValue, handleSubmit, defaultFormValue, ...props }) => {
  return (
    <FlexboxGrid justify="space-between" align="middle" style={styles.header} >
    <FlexboxGrid.Item colspan={12}>
      <h1>Stat Dash</h1>
    </FlexboxGrid.Item>

    <FlexboxGrid.Item style={styles.input} colspan={12}>
      <Form
        formDefaultValue={defaultFormValue}
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
  )
}

export default Home
