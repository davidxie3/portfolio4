const Button = {
    // Styles for the base button
    baseStyle: {
        fontFamily:'EpiceneDisplayRegular',
        color: "mainPurple.primary",
        fontWeight: 'normal',
    },
    // Styles for different sizes (e.g., small, medium, large)
    sizes: {
        xl: {
            fontSize: "32",
            padding: "8",
            h: '56px',
        },
    },
    // Styles for different variants (e.g., solid, outline)
    variants: {
      // Example: custom variant 'outlineRed'
        outlineRed: {
            border: "2px solid red",
            color: "red",
        },
    },

    // Styles for different states (e.g., hover, focus)
    defaultProps: {
      size: "md", // Default size
      variant: "", // default variant
    },
};

export default Button;
