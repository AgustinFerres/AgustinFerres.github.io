import { KeyboardReturn } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/common/CustomButton.tsx";
import ParticleWave from "../components/ParticleWave.tsx";
import { navigateTo, Routes } from "../types/Routes.tsx";


export default function NotFound() {

  const navigate = useNavigate();

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      gap={5}
      sx={{
        height: "100svh",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h3">Page not found</Typography>
      <Typography variant="body2">
        Oops... The page you are looking for might have been removed or is temporarily unavailable.
      </Typography>
      <CustomButton text={"Go back"} endIcon={<KeyboardReturn/>} action={() => navigateTo(Routes.HOME, navigate)}/>
      <ParticleWave />
    </Stack>
  );
}
