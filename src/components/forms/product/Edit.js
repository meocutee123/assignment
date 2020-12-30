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
        invalidFeedback: "This field is required",
        attrs: {
          id: "price",
          classes: [],
          placeholder: "Enter price",
          model: "price",
         
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
  