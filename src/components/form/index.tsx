import React, { useEffect, useState } from "react";
import { Stack, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { InputDefault, Name } from "../inputDefault";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserByEmail, setUserLogged } from "../../store/modules/userLogged/userLoggedSlice";
import { User } from "../../store/modules/typeStore";

interface FormProps {
  mode: "login" | "signUp";
}

enum Profile {
  CARPENTER = "CARPENTER",
  DELIVERY = "DELIVERY",
  TAPESTRY = "TAPESTRY",
  SELLER = "SELLER",
}

export const Form = ({ mode }: FormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profile, setProfile] = useState<Profile | string>(Profile.CARPENTER);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [userExist, setUserExist] = useState<User| undefined>(undefined);
  const logado = useAppSelector((state) => state.userLogged);

  const dispatch = useAppDispatch();

    useEffect(() => {
      if (mode === "login") {
        dispatch(getUserByEmail({ email: email, password: password }));
      }
    }, [dispatch, mode, email, password]);

    useEffect(() => {
      setUserExist(logado);
    }, [logado]);

  const navigate = useNavigate();

  const handleValidateInput = (value: string, key: Name) => {
    switch (key) {
      case "name":
        if (value.length < 3) {
          setErrorName(true);
        } else {
          setErrorName(false);
        }
        break;

      case "email":
        // eslint-disable-next-line no-useless-escape
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!value.match(regexEmail)) {
          setErrorEmail(true);
        } else {
          setErrorEmail(false);
        }
        break;

      case "password":
        if (mode === "signUp") {
          if (!value || value.length < 6) {
            setErrorPassword(true);
          } else {
            setErrorPassword(false);
          }
        }

        if (mode === "login") {
          if (!value) {
            setErrorPassword(true);
          } else {
            setErrorPassword(false);
          }
        }
        break;

      case "repeatPassword":
        if (value !== password) {
          setErrorPassword(true);
        } else {
          setErrorPassword(false);
        }
        break;

      default:
    }
  };

  const handleChange = (value: string, key: Name) => {
    switch (key) {
      case "name":
        setName(value);
        handleValidateInput(value, key);
        break;
      case "email":
        setEmail(value);
        handleValidateInput(value, key);
        break;
      case "password":
        setPassword(value);
        handleValidateInput(value, key);
        break;
      case "repeatPassword":
        setRepeatPassword(value);
        handleValidateInput(value, key);
        break;

      default:
    }
  };

  const handleNavigate = () => {
    if (mode === "login") {
      navigate("/signUp");
    } else {
      navigate("/");
    }
  };

  const createAccount = () => {
    const newUser = {
      name,
      email,
      profile: "ADMIN",
      password,
    };

    //const userExist = !listUsers//.some((user) => user.email === newUser.email);
    //console.log(listUsers)

    // if (!userExist) {
    //   dispatch(addUser(newUser));
    //   clearInputs();
    //   navigate("/");
    // } else {
    //   alert("E-mail já em uso!");
    // }
  };

  const login = () => {
  //  dispatch(
  //     getUserByEmail({ email: email, password: password })
  //   );
console.log('user',userExist?.name)
console.log('logado',logado)
    if (!userExist?.id) {
      console.log(userExist)
      const confirm = window.confirm(
        "User not registered. Do you want to register an account?"
      );
      if (confirm) {
        navigate("/signUp");
      }
      return
    }
    // console.log(userExist.password)
    // if (userExist?.password !== password) {
    //   alert("Incorrect data please check the data and try again");
    //   return;
    // }

    navigate("/home");
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  return (
    <React.Fragment>
      <Stack spacing={2}>
        {mode === "login" && (
          <>
            <InputDefault
              type="text"
              color={errorEmail ? "error" : "primary"}
              label="E-mail"
              name="email"
              value={email}
              handleChange={handleChange}
            />
            <InputDefault
              type="password"
              color={errorPassword ? "error" : "primary"}
              label="Password"
              name="password"
              value={password}
              handleChange={handleChange}
            />
            <Button
              disabled={errorEmail || errorPassword}
              variant="outlined"
              color="primary"
              onClick={login}
            >
              Login
            </Button>
          </>
        )}
      </Stack>
      <Stack spacing={1} direction="row">
        {mode === "login" && (
          <>
            <Typography variant="h6">don't have account </Typography>
            <Typography
              variant="h6"
              color="primary"
              onClick={() => navigate("/signUp")}
            >
              Register
            </Typography>
          </>
        )}
      </Stack>

      <Stack spacing={2}>
        {mode === "signUp" && (
          <>
            <InputDefault
              type="text"
              color={errorName ? "error" : "primary"}
              label="Nome"
              name="name"
              value={name}
              handleChange={handleChange}
            />
            <InputDefault
              type="text"
              color={errorEmail ? "error" : "primary"}
              label="E-mail"
              name="email"
              value={email}
              handleChange={handleChange}
            />
            <InputDefault
              type="password"
              color={errorPassword ? "error" : "primary"}
              label="Password"
              name="password"
              value={password}
              handleChange={handleChange}
            />
            <InputDefault
              type="password"
              color={errorPassword ? "error" : "primary"}
              label="Confirm Password"
              name="repeatPassword"
              value={repeatPassword}
              handleChange={handleChange}
            />
            <RadioGroup
              row
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={Profile.CARPENTER}
            >
              <FormControlLabel
                value={Profile.CARPENTER}
                control={<Radio />}
                label="Marcenária"
              />
              <FormControlLabel
                value={Profile.DELIVERY}
                control={<Radio />}
                label="Motorista"
              />
              <FormControlLabel
                value={Profile.TAPESTRY}
                control={<Radio />}
                label="Tapeçaria"
              />
              <FormControlLabel
                value={Profile.SELLER}
                control={<Radio />}
                label="Vendedor"
              />
            </RadioGroup>
            <Button
              disabled={errorName || errorEmail || errorPassword}
              variant="outlined"
              color="primary"
              onClick={createAccount}
            >
              Register
            </Button>
          </>
        )}
      </Stack>
      <Stack spacing={1} direction="row">
        {mode === "signUp" && (
          <>
            <Typography variant="h6">already have an account?</Typography>
            <Typography
              variant="h6"
              color="primary"
              onClick={() => navigate("/")}
            >
              Login
            </Typography>
          </>
        )}
      </Stack>
    </React.Fragment>
  );
};
