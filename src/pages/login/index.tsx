import { Grid } from "@mui/material";
import { BannerLogin, ContainerForm, Form } from "../../components";

export const Login = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ height: "100vh" }}>
        <Grid item xs={12} md={8} p="2">
          <BannerLogin />
        </Grid>
        <Grid item xs={12} md={4}>
          <ContainerForm>
            <Form mode="login" />
          </ContainerForm>
        </Grid>
      </Grid>
    </>
  );
};
