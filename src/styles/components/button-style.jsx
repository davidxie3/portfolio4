const Button = {
	// Styles for the base button
	baseStyle: {
		fontFamily: 'RomieRegular',
		fontWeight: 'normal',
	},
	// Styles for different sizes (e.g., small, medium, large)
	sizes: {
		xl: {
			fontSize: '1.7vw',
			padding: '8',
			h: '56px',

		},
	},
	// Styles for different variants (e.g., solid, outline)
	variants: {
		// Example: custom variant 'outlineRed'
		worksNavBar: {
			fontSize: '64',
            
		},
	},

	// Styles for different states (e.g., hover, focus)
	defaultProps: {
		size: 'md', // Default size
		variant: '', // default variant
	},
};

export default Button;
