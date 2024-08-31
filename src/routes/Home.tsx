import { Outlet } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout.tsx";


export default function Home() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
}
