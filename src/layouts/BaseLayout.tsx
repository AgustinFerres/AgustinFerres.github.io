import { Grid, SxProps } from "@mui/material";
import { ReactNode } from "react";
import NavBar from "../components/NavBar.tsx";


const gridStyle = (color: string): SxProps => ({
  backgroundColor: color ?? "transparent",
  width: 1,
  height: 100,
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
      <Grid sx={gridStyle("red")} >
        <NavBar />
      </Grid>
      <Grid sx={gridStyle("blue")} xs >
        {props.children}
      </Grid>
      <Grid sx={gridStyle("red")} >
      </Grid>
    </Grid>
  );
}
