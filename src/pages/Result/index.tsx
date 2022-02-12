import { Link } from 'react-router-dom'
import {
  Avatar,
  Box,
  Button,
  Typography,
  Grid,
} from '@mui/material'
import { Feedback } from '@mui/icons-material'

import { useAnswer } from '../../hooks/AnswerProvider'
import { useDataList } from '../../hooks/useDataList'

import { Picture } from '../../components'

export function Result() {
  const { list } = useAnswer()
  const { data: DATA } = useDataList()

  const result = list.map(a => {
    const data = DATA.find(d => d.id === a.id)
    return { ...data, correct: a.correct }
  }) as any[]
  // const result = [{
  //   src: '/pics/ban.jpg',
  //   name: 'あっかりーん',
  //   desc: '特徴がないのが特徴',
  //   correct: true,
  //   huntable: true,
  // }]

  return (
    <Box sx={{
      mt: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }} >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <Feedback />
      </Avatar>
      <Typography component="h1" variant="h5">
        解答結果 ({ result.reduce((accum, current) => accum += current.correct ? 1 : 0, 0) }/{ result.length })
      </Typography>

      <Grid container spacing={2}
        sx={{
          mt: 2,
        }}
      >
      { result.map(data => {
        return (
          <Grid item>
            <Picture
              reveal={true}
              src={data.src}
              name={data.name}
              huntable={data.huntable}
              correct={data.correct}
            />
          </Grid>
        )
      }) }
      </Grid>

      <Button to="/exam"
        sx={{ mt: 4, mb: 4 }}
        size="large"
        variant="contained"
        color="primary"
        component={Link}
      >もう一度挑戦</Button>
    </Box>
  )
}

export default Result
