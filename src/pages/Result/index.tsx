import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Pets } from '@mui/icons-material'

import { useAnswer } from '../../hooks/AnswerProvider'

export function Result() {
  const { list } = useAnswer()

  return (
    <Box sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }} >
      <Typography component="h1" variant="h5">
        解答結果
      </Typography>

      { list.map(answer => <div>
        { answer.id }
        { answer.correct ? 'true' : 'false' }
      </div>) }

      <Link to="/exam">ReTry</Link>
    </Box>
  )
}

export default Result
