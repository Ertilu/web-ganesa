import { Box, Container, Typography, Divider } from "@mui/material";
import PerkCard from "./PerkCard";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import Icon1 from "@mui/icons-material/Park";
import Icon2 from "@mui/icons-material/Speaker";
import Icon3 from "@mui/icons-material/More";

export const centeredStyles = {
  alignItems: "center",
  textAlign: "center",
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

gsap.registerPlugin(ScrollTrigger);

const perksArray = [
  {
    title: "Menyediakan Tarub / Janur Kuning",
    Icon: Icon1,
    text: "Tarub untuk acara hajatan",
  },
  {
    title: "Menyediakan sound / speaker",
    text: "Speaker agar bisa dangdutan",
    Icon: Icon2,
  },
  {
    title: "Dan lain lain",
    Icon: Icon3,
    text: "Nantikan kegiatan kita selanjutnya",
  },
];
const Perks = () => {
  useEffect(() => {
    MainTitleAnimation(".h1", ".h2");
  }, []);

  return (
    <>
      {" "}
      <Container
        id="misiSection"
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          my: "4em",
        }}
      >
        <Box sx={centeredStyles}>
          <Typography
            className="h1 t25o0"
            variant="h1"
            sx={{
              fontSize: {
                xs: "2.2em",
                sm: "2.5em",
                md: "3em",
              },
            }}
            fontWeight="600"
          >
            Misi kami
          </Typography>
          <Typography
            variant="h2"
            className="secondary h2"
            sx={{
              pt: "1.5em",
              transform: "translateY(15px)",
              opacity: 0,
              maxWidth: "570px",
              fontSize: {
                xs: ".8em",
                sm: "1em",
              },
            }}
          >
            Membuat nengkol menjadi alus dan mantab
          </Typography>

          <Box
            sx={{
              mt: "3em",
              display: "flex",
              flexWrap: "wrap",
              gap: "5%",
              justifyContent: {
                xs: "center",
                sm: "space-between",
              },
            }}
          >
            {perksArray.map((perk) => {
              return (
                <PerkCard
                  key={perk.title}
                  title={perk.title}
                  text={perk.text}
                  Icon={perk.Icon}
                />
              );
            })}
          </Box>
        </Box>
      </Container>{" "}
      <Divider />{" "}
    </>
  );
};

export default Perks;
