import { Grid, Icon, TextField } from "@material-ui/core";
import { useField } from "formik";

export default function Input(props) {
  const { id, icon, name, label, type, iconColor } = props;

  const [field, meta] = useField({ ...props, type: type });

  return (
    <Grid container spacing={1} alignItems={meta.error ? "center" : "flex-end"}>
      {icon && (
        <Grid item>
          <Icon
            style={{
              color: meta.touched && meta.error ? "#ff1744" : iconColor,
              transition: "0.3s",
            }}
          >
            {icon}
          </Icon>
        </Grid>
      )}
      <Grid item>
        <TextField
          variant="filled"
          name={name}
          label={label}
          type={type}
          error={meta.touched && meta.error ? true : false}
          helperText={meta.touched && meta.error}
          {...field}
        />
      </Grid>
    </Grid>
  );
}
