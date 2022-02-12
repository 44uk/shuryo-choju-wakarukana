import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  Box,
  Grid,
  Typography,
} from '@mui/material'
import { Done, Clear } from '@mui/icons-material'

import {
    PictureContainer
} from '../../containers'

import { useAnswer } from '../../hooks/AnswerProvider'
import { useDataList } from '../../hooks/useDataList'

export function Exam() {
  const navigate = useNavigate()
  const [ left, setLeft ] = useState(0)
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
      mt: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }} >
      <Typography component="h1" variant="h5"
        sx={{ mb: 2 }}
      >
        問 { index + 1 }
      </Typography>

      <PictureContainer
        timeout={3}
        reveal={false}
        src={data.src}
        name={data.name}
        huntable={data.huntable}
        onChangeReveal={v => setReveal(v)}
        onTick={v => setLeft(v)}
      />

      <Grid container spacing={2}
        sx={{ mt: 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs sx={{ textAlign: 'left' }}>
          { reveal &&
          <Button type="button" onClick={incorrect}
            color="error"
            variant="contained"
            size="large"
            startIcon={<Clear />}
          >誤答</Button>
          }
        </Grid>
        <Grid item xs={2} sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="div">
            { ! reveal && left }
          </Typography>
        </Grid>
        <Grid item xs sx={{ textAlign: 'right' }}>
          { reveal &&
          <Button type="button" onClick={correct}
            color="success"
            variant="contained"
            size="large"
            endIcon={<Done />}
          >正解</Button>
          }
        </Grid>
      </Grid>
    </Box>
  )
}

export default Exam
