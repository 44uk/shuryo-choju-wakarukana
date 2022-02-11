import { Link } from 'react-router-dom'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Typography,
} from '@mui/material'
import { Pets } from '@mui/icons-material'

export function Start() {
  return (
    <Box sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }} >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <Pets />
      </Avatar>
      <Typography component="h1" variant="h5">
        狩猟鳥獣わかるかな？
      </Typography>

      <Link to="exam">
        <Button type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >制限時間なし</Button>
      </Link>

      <Link to="exam">
        <Button type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >制限時間あり</Button>
      </Link>
    </Box>
  )
}

export default Start
