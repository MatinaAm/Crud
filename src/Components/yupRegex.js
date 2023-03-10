import * as yup from "yup";

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const urlPattern =/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

export const formSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  address: yup.string().required(),
  phoneNumber: yup.string().matches(phoneRegex, {
    message: "Inccorect format",
    excludeEmptyString: true,
  }),
  twitter: yup.string().matches(urlPattern, {
    message: "Inccorect url format",
    excludeEmptyString: true,
  }),
  facebook: yup.string().matches(urlPattern, {
    message: "Inccorect url format",
    excludeEmptyString: true,
  }),
  linkdin: yup.string().matches(urlPattern, {
    message: "Inccorect url format",
    excludeEmptyString: true,
  }),
  instagram: yup.string().matches(urlPattern, {
    message: "Inccorect url format",
    excludeEmptyString: true,
  }),
});
