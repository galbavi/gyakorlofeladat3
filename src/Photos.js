import { Grid2 } from "@mui/material";
import { PhotoCard } from "./PhotoCard";

export const Photos = ({ photos }) => {
  return (
    <Grid2 container spacing={2} size={{ xs: 12, md: 4, lg: 4 }}>
      {photos.map((item) => {
        return (
          <Grid2 size={{ xs: 6, md: 12, lg: 12 }}>
            <PhotoCard label={item.label} imagesrc={item.src} />
          </Grid2>
        );
      })}
    </Grid2>
  );
};
