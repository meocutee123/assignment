export default {
  formLayout: [
    {
      cols: "6",
      type: "input",
      label: "User name",
      attrs: {
        id: "userName",
        class: [],
        placeholder: "Enter your username",
        model: "userName",
        disabled: true,
      },
    },
    {
      cols: "6",
    },
    {
      cols: "6",
      type: "input",
      label: "First name",
      attrs: {
        id: "first",
        classes: [],
        placeholder: "Enter your first name",
        validation: true,
        invalidFeedback: "This field is required",
        model: "first",
      },
    },
    {
      cols: "6",
      type: "input",
      label: "Last name",
      attrs: {
        id: "last",
        classes: [],
        placeholder: "Enter your last name",
        validation: true,
        invalidFeedback: "This field is required",
        model: "last",
      },
    },
    {
      cols: "8",
      type: "checkbox",
      attrs: {
        label: "Status",
        model: "status",
      },
    },
  ],
};
