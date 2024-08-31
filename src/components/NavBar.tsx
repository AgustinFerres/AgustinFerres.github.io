import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navigateTo, Routes } from "../types/Routes.tsx";


export default function NavBar() {

  const navigate = useNavigate();

  const handleNavigate = (path: Routes) => {
    navigateTo(path, navigate);
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap={5}
      sx={{
        p: 2,
        pt: 5
      }}
    >
      <Typography onClick={() => handleNavigate(Routes.HOME)}>Home</Typography>
      <Typography onClick={() => handleNavigate(Routes.ABOUT)}>About</Typography>
      <Typography onClick={() => handleNavigate(Routes.CONTACT)}>Contact</Typography>
    </Stack>
  )
}
