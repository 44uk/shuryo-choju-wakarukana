import {
  Badge,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from '@mui/material'

interface Props {
  src: string
  name: string
  huntable: boolean
  reveal: boolean
  count: number
}

export function Picture({ src, name, huntable, reveal = false, count }: Props) {
  return (
    <Badge badgeContent={count} color="warning">
      <Card>
        <CardMedia
          component="img"
          height="240"
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
          <Typography variant="body2" color="text.secondary">
            { reveal
              ? <>狩猟： { huntable ? '可' : '不可' }</>
              : <Skeleton />
            }
          </Typography>
        </CardContent>
      </Card>
    </Badge>
  )
}

export default Picture
