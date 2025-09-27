import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import withMT from '@material-tailwind/react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
   content: [],
  theme: {
    extend: {},
  },
  
})
// const withMT = require("@material-tailwind/react/utils/withMT");
// export default withMT({
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });