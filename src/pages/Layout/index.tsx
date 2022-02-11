import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'

export function Layout() {
  return (
    <Container component="main" maxWidth="xs">
      <Outlet />
    </Container>
  )
}

export default Layout
