import { Grid, SxProps } from "@mui/material";
import { ReactNode } from "react";
import Footer from "../components/Footer.tsx";
import NavBar from "../components/NavBar.tsx";


const gridStyle = (color: string): SxProps => ({
  backgroundColor: color ?? "transparent",
  width: 1,
});

interface Props {
  children: ReactNode;
}

export default function BaseLayout(props: Props) {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100svh',
      }}
    >
      <Grid item sx={gridStyle("")} >
        <NavBar />
      </Grid>
      <Grid item sx={gridStyle("")} xs >
        {props.children}
      </Grid>
      <Grid item sx={gridStyle("")} >
        <Footer />
      </Grid>
    </Grid>
  );
}
