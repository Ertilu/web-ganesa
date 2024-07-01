import { Box } from "@mui/material";
import SocialMediaIcon from "./SocialMediaIcon";

export const SocialMediaArray = [
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    color: "#4267B2",
    svg: "https://www.svgrepo.com/show/158427/facebook.svg",
  },
];

const SocialMedia = () => {
  return (
    <Box
      sx={{
        pt: "1em",
        pb: "3em",
        display: "flex",
      }}
    >
      {SocialMediaArray.map((icon) => {
        return (
          <SocialMediaIcon
            svg={icon.svg}
            key={icon.href}
            title={icon.title}
            href={icon.href}
            color={icon.color}
          />
        );
      })}
    </Box>
  );
};

export default SocialMedia;
