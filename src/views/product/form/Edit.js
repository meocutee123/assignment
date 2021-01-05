export default {
    formLayout: [
      {
        cols: "6",
        type: "input",
        label: "Product name",
        attrs: {
          id: "productName",
          disabled: true,
          class: [],
          placeholder: "Enter product name",
          model: "productName",
        },
      },
      {
        cols: "6",
        type: "input",
        label: "Price",
        attrs: {
          id: "price",
          classes: [],
          placeholder: "Enter price",
          model: "price",
          validation: true,
          invalidFeedback:
            "This field is required and must be at least 3 characters",
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
  