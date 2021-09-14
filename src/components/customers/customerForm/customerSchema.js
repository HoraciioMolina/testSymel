import * as Yup from "yup";
import { REQUIRED, ONLY_ALPHABETIC, onlyAlphabetic, EMAIL, maxChar } from "../../../constants/validations";

export default Yup.object({
  name: Yup.string()
    .required(REQUIRED)
    .matches(onlyAlphabetic, { message: ONLY_ALPHABETIC }),
  lastname: Yup.string()
    .required(REQUIRED)
    .matches(onlyAlphabetic, { message: ONLY_ALPHABETIC }),
  email: Yup.string().required(REQUIRED).email(EMAIL),
  phone: Yup.string().max(8, maxChar(8)).required(REQUIRED),
  plan: Yup.string().required(REQUIRED),
});
