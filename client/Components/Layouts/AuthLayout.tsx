import React from "react"
import { useRouter } from 'next/router'
import { Box, Container, Divider, Grid, Hidden, IconButton, Link, Stack, Typography, Button } from '@mui/material'
import { Close, Google, Facebook } from '@mui/icons-material'
import { Layout } from './'
import { useActions, useTypedSelector } from '../../store/hooks'
import { Logo } from "../Logo"
import { LinearProgress } from "../../modules"

type Props = {
  children: React.ReactNode,
  title: 'Вхід' | 'Реєстрація',
  bottomText: string,
  subtitle: {
    title: string,
    btn: string,
    link: string
  }
}

export const AuthLayout: React.FC<Props> = ({ children, title, subtitle, bottomText }) => {
  const router = useRouter()
  const { linearProgress: progress } = useTypedSelector(state => state.progress)
  const { linearProgress } = useActions()

  React.useEffect(() => {
    linearProgress(false)
  }, [])

  const handleClick = () => {
    router.back()
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }

  return <Layout>
    <Box>
      {progress && <LinearProgress />}
      <Stack direction="row" justifyContent='space-between' alignItems='center' p={3}>
        <Logo />
        <IconButton component="span" onClick={handleClick}>
          <Close fontSize="large" />
        </IconButton>
      </Stack>
      <Container maxWidth='md'>
        <Box p={2}>
          <Typography variant="h2" fontWeight={700} textAlign='center'>
            {title}
          </Typography>
          <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
            <Typography variant="subtitle1" >
              {subtitle.title}
            </Typography>
            <Link
              component="button"
              underline="none"
              variant="subtitle1"
              onClick={() => router.push(subtitle.link)}
            >
              {subtitle.btn}
            </Link>
          </Stack>
        </Box>
        <Grid container alignItems='center' sx={{ flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' }, maxWidth: { xs: '360px', sm: '360px', md: '100%' }, margin: 'auto' }}>
          <Grid item sm={12} md={6}>
            {children}
          </Grid>
          <Hidden mdDown>
            <Divider orientation='vertical' flexItem sx={{ marginRight: "-1px" }} />
          </Hidden>
          <Hidden mdUp>
            <Divider flexItem sx={{ marginTop: '30px' }}>Або ввійдіть через ел. пошту</Divider>
          </Hidden>
          <Grid item sm={12} md={6}>
            <Box component="form" maxWidth='360px' margin='auto'>
              <Button variant="contained" sx={{ width: '100%', backgroundColor: '#4285f4', color: '#fff' }} startIcon={<Google />}>
                Увійти чарез Google
              </Button>
              <Button variant="contained" sx={{ width: '100%', marginTop: '20px', backgroundColor: '#3b5998', color: '#fff' }} startIcon={<Facebook />}>
                Увійти чарез Facebook
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='sm' sx={{ marginTop: '50px' }}>
        <Stack spacing={2} p={2}>
          <Typography variant="body2" textAlign='center' lineHeight='1.7' fontWeight={100}>
            {`* ${bottomText}, ви приймаєте Умовами використання, визнаєте, що прочитали Політику конфіденційності, та погоджуєтеся отримувати поштою новини від Travel Guide.`}
          </Typography>
          <Divider flexItem />
          <Typography variant="body2" textAlign='center' lineHeight='1.7' fontWeight={100}>
            Цей сайт захищено reCAPTCHA Enterprise, та до нього застосовано Політику конфіденційності і Умови використання Google
          </Typography>
        </Stack>
      </Container>
    </Box>
  </Layout>
}