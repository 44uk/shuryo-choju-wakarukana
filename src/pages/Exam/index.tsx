import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Grid,
  Typography,
  Button,
} from '@mui/material'
import { Done, Clear } from '@mui/icons-material'

import {
    PictureContainer
} from '../../containers'

import { useAnswer } from '../../hooks/AnswerProvider'
import { useDataList } from '../../hooks/useDataList'

export function Exam() {
  const navigate = useNavigate()
  const [ index, setIndex ] = useState(0)
  const [ reveal, setReveal ] = useState(false)
  const { add, clear, list } = useAnswer()

  const { data: DATA } = useDataList()
  const data = DATA[index]

  function nextOrFinish() {
    if(index >= DATA.length - 1) {
      navigate('/result')
      return
    }
    setIndex(prev => prev + 1)
  }

  function correct() {
    add({ id: data.id, correct: true })
    nextOrFinish()
  }

  function incorrect() {
    add({ id: data.id, correct: false })
    nextOrFinish()
  }

  useEffect(() => {
    clear()
  }, [])

  return (
    <Box sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }} >
      <Typography component="h1" variant="h5">
        問 { index + 1 }
      </Typography>

      <PictureContainer
        timeout={3}
        reveal={false}
        src={data.src}
        name={data.name}
        huntable={data.huntable}
        onChangeReveal={v => setReveal(v)}
      />

      { reveal && <>
        <Grid container>
          <Grid item xs>
            <Button type="button" onClick={correct}
              color="success"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            ><Done /></Button>
          </Grid>
          <Grid item>
            <Button type="button" onClick={incorrect}
              color="error"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            ><Clear /></Button>
          </Grid>
        </Grid>
      </>}
    </Box>
  )
}

export default Exam
