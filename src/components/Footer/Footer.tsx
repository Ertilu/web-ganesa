import gsap from "gsap";
import { Box, Typography, Divider, Grid } from "@mui/material";

import Link from "next/link";
import { useRouter } from "next/router";
function Copyright() {
  return (
    <>
      <Divider />
      <Box
        maxWidth="lg"
        sx={{
          textAlign: "center",
          margin: "1em auto",
        }}
      >
        <Typography
          variant="h1"
          fontSize="1em"
          onClick={() => {
            gsap.to(window, { duration: 0.8, scrollTo: `#hero` });
          }}
        >
          {"Copyright © "}
          <Link color="inherit" rel="noreferrer" href="#">
            ganesa
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </>
  );
}
const styles = {
  mt: "1em",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  flexWrap: "wrap",
  color: "white",
};

function Footer() {
  const router = useRouter();
  return (
    <Box>
      <Divider />
      <Box
        sx={{
          width: "100%",
          color: "white",
          minHeight: "200px",
          display: "flex",
          margin: "0 auto",
        }}
      >
        <Grid
          sx={{
            gap: "1.5em",
            mx: {
              xs: "3vw",
              lg: "auto",
            },
            my: "2em",
          }}
          maxWidth="lg"
          container
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h1" fontSize="1.4em" fontWeight="400">
              Tentang Kami
            </Typography>

            <Box sx={styles}>
              <Typography variant="h3" fontSize="1em">
                GANESA - Gabungan Anak Nengkol Salawasna
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} textAlign={"right"}>
            <Typography variant="h1" fontSize="1.4em" fontWeight="400">
              Links
            </Typography>

            <Box className="link" sx={styles}>
              <Typography
                className="FooterLink"
                onClick={() => {
                  router.push("/");
                  gsap.to(window, { duration: 0.8, scrollTo: `#hero` });
                }}
              >
                Home
              </Typography>
              <Link href="/contact">Contact</Link>

              <Typography
                className="FooterLink"
                onClick={() => {
                  router.push("/");
                  gsap.to(window, { duration: 0.5, scrollTo: `#about` });
                }}
              >
                About
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Copyright />
    </Box>
  );
}
export default Footer;
