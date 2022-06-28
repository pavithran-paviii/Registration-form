export const inputFieldData = [
  {
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    error: "Username should only contain letters",
    id: "name",
    required: true,
    pattern: "^[a-zA-Z-]+$",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    error: "Enter valid email address",
    id: "email",
    required: true,
  },
  {
    label: "Mobile",
    type: "tel",
    placeholder: "Enter your mobile number",
    id: "mobile",
  },
  {
    label: "Country",
    id: "country",
  },
  {
    label: "City",
    type: "text",
    placeholder: "Enter your City",
    id: "city",
  },
  {
    label: "State",
    type: "text",
    placeholder: "Enter your State",
    id: "state",
  },
];
