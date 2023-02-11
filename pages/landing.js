import { Container, Stack, Typography, Grid, Button, Box } from '@mui/material';
import Image from 'next/image'
import aranyhaj from '../assets/images/Aranyhaj1.jpg'
import aranyhaj2 from '../assets/images/Aranyhaj2.png'
import aranyhaj5 from '../assets/images/Aranyhaj5.png'
import Link from 'next/link'

const Landing = () => {

  return (
    <Container maxWidth={false} sx={{ backgroundColor: "#F2F2F2", minHeight: "100vh"}}>
      <Box sx={{ pr: { xl: 30, lg: 6, md: 4, xs: 0 }, pl: { xl: 36, lg: 14, md: 4, xs: 0 } }}>
        <Stack 
          direction="row"
          alignItems="center"
          sx={{ minHeight: "10vh" }}
        >
          <Typography sx={{ fontWeight: '700', fontSize: { sm: 34, xs: 26 } }}>
            LOGO
          </Typography>
        </Stack>
        <Grid
          container
          direction="row"
          justifyContent="center"
          // alignItems="flex-end"
          spacing={2}
          sx={{ minHeight: "90vh" }}
        >
          <Grid item lg={7} md={7} sm={7} xs={12} sx={{ display: "flex", alignItems: {xs: "flex-end", sm: "center"}}}>
            <Stack  sx={{ width: "100%", display: "flex" }}>
              <Typography component="h1" sx={{ fontWeight: '500', fontSize: { xl: 108, lg: 72, sm: 56, xs: 44 }, mb: {sm: 0, xs: 2}}}>
                Aranyhaj Világa
              </Typography>
              <Stack sx={{  }}>
                <Typography sx={{ fontSize: { xl: 18, sm: 14, xs: 12 }}}>
                  Fő célunk felhívni a figyelmet kislányunk egyik alapbetegségére a hypotóniára,
                </Typography>
                <Typography sx={{ fontSize: { xl: 18, sm: 14, xs: 12 }}}>
                  tájékoztatni az érintett szülőket a fejlesztési lehetőségekről,
                </Typography>
                <Typography sx={{ fontSize: { xl: 18, sm: 14, xs: 12 }}} gutterBottom>
                  kislányunk és a többi hypoton kisgyerek fejlesztésére támogatókat találni
                </Typography>
              </Stack>
              <Stack
                direction="row"
                // justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ my: 4, display: {sm: "flex", xs: "none"} }}
              >
                <Link href="/donation">
                  <Button color="error" size="large" variant="contained" disableElevation={true} disableRipple={true}  >Támogatom</Button>
                </Link>
                <Link href="/about">
                  <Button color="error" size="large" variant="outlined" disableElevation={true} disableRipple={true} >Alapítványunkról</Button>
                </Link>
              </Stack>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                sx={{ my: 4, display: {sm: "none", xs: "flex"} }}
                >
                <Link href="/donation">
                  <Button color="error" size="" variant="contained" disableElevation={true} disableRipple={true}  >Támogatom</Button>
                </Link>
                <Link href="/about">
                  <Button color="error" size="" variant="outlined" disableElevation={true} disableRipple={true} >Alapítványunkról</Button>
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={5} md={5} sm={5} sx={{ display: { sm: "flex", xs: "none"}, alignItems: "center"}}>
            <Stack>
              <img src={aranyhaj2.src} alt="aranyhaj" srcSet="" />
            </Stack>
          </Grid>     
          <Grid item lg={5} md={5} xs={5} sx={{ display: { sm: "none", xs: "flex"}, alignItems: "center"}}>
            <Stack>
              <img src={aranyhaj5.src} alt="aranyhaj" srcSet="" />
            </Stack>
          </Grid>     
        </Grid>
      </Box>
    </Container>
  )
}

export default Landing