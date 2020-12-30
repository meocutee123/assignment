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
        validation: true,
        invalidFeedback:
          "This field is required and must be at least 3 characters",
      },
    },
    {
      cols: "6",
    },
    {
      cols: "6",
      type: "input",
      label: "First name",
      invalidFeedback: "This field is required",
      attrs: {
        id: "first",
        classes: [],
        placeholder: "Enter your first name",
        model: "first",
        validation: true,
      },
    },
    {
      cols: "6",
      type: "input",
      label: "Last name",
      invalidFeedback: "This field is required",
      attrs: {
        id: "last",
        classes: [],
        placeholder: "Enter your last name",
        model: "last",
        validation: true,
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
