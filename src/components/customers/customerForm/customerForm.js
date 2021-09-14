import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { saveNewCustomer } from "../../../firebase/client";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import WifiRoundedIcon from "@material-ui/icons/WifiRounded";

import { useSnackbar } from "notistack";
import { ButtonBase } from "@material-ui/core";
import customerSchema from "./customerSchema";
import { Formik, Form } from "formik";
import Input from "../../UI/input";



const CustomersForm = (props) => {
  const schema = customerSchema;

  const initialValues = {
    name: "",
    lastname: "",
    phone: "",
    email: "",
    plan: "",
  };

  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formState) => {
    let resp;
    setLoading(true);
    await saveNewCustomer(formState, (response) => {
      setLoading(false);
      resp = response
    });
    resp.message && enqueueSnackbar(resp?.message, {
      variant: resp?.success ? "success" : "error",
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => onSubmit(values)}
    >
      <Form>
        <Input
          name="name"
          label="Nombre"
          icon={<AccountCircleIcon style={{ padding: 0 }} />}
          iconColor="#f08a30"
        />
        <Input
          name="lastname"
          label="Apellido"
          icon={<AccountCircleIcon style={{  padding: 0 }} />}
          iconColor="#f08a30"
        />
        <Input
          name="email"
          label="Email"
          icon={
            <AlternateEmailRoundedIcon
              style={{  padding: 0 }}
            />
          }
          iconColor="#f08a30"
        />
        <Input
          name="phone"
          label="Telefono"
          icon={<PhoneRoundedIcon style={{  padding: 0 }} />}
          iconColor="#f08a30"
        />
        <Input
          name="plan"
          label="Plan"
          icon={<WifiRoundedIcon style={{  padding: 0 }} />}
          iconColor="#f08a30"
        />

        <ButtonBase loading={loading} type="submit">
          Guardar
        </ButtonBase>
      </Form>
    </Formik>
  );
};

export default CustomersForm;
