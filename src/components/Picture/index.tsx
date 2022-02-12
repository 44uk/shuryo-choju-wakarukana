import {
  Avatar,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Typography,
  Skeleton,
  IconButton,
  Chip,
} from '@mui/material'
import { Done, Clear, Block, CheckCircle } from '@mui/icons-material'

interface Props {
  src: string
  name: string
  huntable: boolean
  reveal: boolean
  correct?: boolean
}

export function Picture({ src, name, huntable, reveal = false, correct }: Props) {
  return (
    <Card>
      { correct !== undefined && (
        <CardHeader
          avatar={ correct ? <Done color="success" /> : <Clear color="error" /> }
          title={ <Typography variant="h5">{ correct ? '正解' : '誤答' }</Typography> }
        />
      ) }
      <CardMedia
        component="img"
        image={src}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { reveal
            ? <>{ name }</>
            : <Skeleton />
          }
        </Typography>
        <Typography variant="body2">

          { reveal
            ? <Chip label={ huntable ? '狩猟鳥獣' : '非狩猟鳥獣' }
              icon={ huntable ? <CheckCircle /> : <Block /> }
              color={ huntable ? 'success' : 'error' }
              />
            : <Skeleton />
          }
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Picture
