export default {
    formLayout: [
      {
        cols: "6",
        type: "input",
        label: "Product name",
        attrs: {
          id: "productName",
          class: [],
          placeholder: "Enter product name",
          model: "productName",
          validation: true,
          invalidFeedback:
            "This field is required and must be at least 3 characters",
        },
      },
      {
        cols: "6",
        type: "input",
        label: "Price",
        invalidFeedback: "This field is required",
        attrs: {
          id: "price",
          classes: [],
          placeholder: "Enter price",
          model: "price",
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
    buttonGroup: [
      {
        type: "submit",
        class: "mr-3",
        variant: "success",
        label: "Submit",
      },
      {
        class: "mr-3",
        variant: "success",
        label: "Cancel",
        to: "/product",
      },
    ],
  };
  