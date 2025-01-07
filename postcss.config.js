// export default {
//   plugins: [  
//       require('tailwindcss'),  
//       require('postcss-nested'),  
//       require('autoprefixer'),
//       require('cssnano')({  
//           preset: 'default'  
//       })  
//   ]
// }

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,
    autoprefixer
  ],
};
