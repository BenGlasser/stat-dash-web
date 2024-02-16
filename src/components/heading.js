import React, { useState, useRef } from 'react'
import { Form, FlexboxGrid, InputGroup} from 'rsuite'
import SearchIcon from '@rsuite/icons/Search'

const styles = {
  header: {
    width: '100%',
    height: '75px',
    padding: '0 20px',
    backgroundImage: 'url(\'https://media.discordapp.net/attachments/1051926785786392599/1207942508181585961/soultrip._a_smooth_plain_web_page_header_framed_opening_gradien_efaf2e87-ed1c-4e20-9168-f8e2d90b1ed4.png?ex=65e17b20&is=65cf0620&hm=2185322645435bb6a19f4f1f315f4085ae2c70cc683dcd605cdfd876db9ff1c9&=&format=webp&quality=lossless&width=1920&height=136\')',
    width: '100%',
    position: 'fixed',
    zIndex: '100',
    boxShadow: '0 5px 15px rgb(0 0 0 / 0.3)',
  },
  input: {
    maxWidth: '200px'
  }
}

const Home = ({formValue, handleFormValue, handleSubmit, defaultFormValue, ...props }) => {
  return (
    <FlexboxGrid justify="space-between" align="middle" style={styles.header} >
    <FlexboxGrid.Item colspan={12}>
      <h1>(⁠☞⁠ ͡⁠°⁠ ͜⁠ʖ⁠ ͡⁠°⁠)⁠☞</h1>
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
