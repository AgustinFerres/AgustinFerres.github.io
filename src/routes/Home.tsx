import { Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout.tsx";


export default function Home() {
  return (
    <BaseLayout>
      <Stack
        height={1}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3">
          Just having fun
        </Typography>
        <Typography variant="caption">
          coming soon...
        </Typography>
      </Stack>
      <Outlet />
    </BaseLayout>
  );
}
