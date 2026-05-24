export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'hero-lines': 'radial-gradient(circle at top, rgba(99, 102, 241, 0.12), transparent 30%), radial-gradient(circle at left, rgba(59, 130, 246, 0.08), transparent 22%)',
      },
    },
  },
  plugins: [],
};
