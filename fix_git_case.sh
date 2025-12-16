#!/bin/bash
# Bulk rename to temp and back to force git index update

# 1. Rename Dirs to temp
mv asset/css/index-css asset/css/index-css-temp
mv asset/css/low-css asset/css/low-css-temp
mv asset/css/high-css asset/css/high-css-temp

mv asset/js/index-js asset/js/index-js-temp
mv asset/js/low-js asset/js/low-js-temp
mv asset/js/high-js asset/js/high-js-temp

mv asset/page-low asset/page-low-temp
mv asset/page-high asset/page-high-temp
mv asset/index-high asset/index-high-temp

# Rename Files to temp (Photos)
mv asset/media/photo/projet2.webp asset/media/photo/projet2-temp.webp
mv asset/media/photo/projet3.jpg asset/media/photo/projet3-temp.jpg
mv asset/media/photo/projet4.jpg asset/media/photo/projet4-temp.jpg
mv asset/media/photo/projet5.jpg asset/media/photo/projet5-temp.jpg
mv asset/media/photo/projet6.jpeg asset/media/photo/projet6-temp.jpeg
# 3d_skull seems fine but let's be safe
mv asset/media/photo/3d_skull.png asset/media/photo/3d_skull-temp.png

# 2. Stage deletion/add
git add .
git commit -m "renaming directories and files to temp to fix case sensitivity"

# 3. Rename back
mv asset/css/index-css-temp asset/css/index-css
mv asset/css/low-css-temp asset/css/low-css
mv asset/css/high-css-temp asset/css/high-css

mv asset/js/index-js-temp asset/js/index-js
mv asset/js/low-js-temp asset/js/low-js
mv asset/js/high-js-temp asset/js/high-js

mv asset/page-low-temp asset/page-low
mv asset/page-high-temp asset/page-high
mv asset/index-high-temp asset/index-high

mv asset/media/photo/projet2-temp.webp asset/media/photo/projet2.webp
mv asset/media/photo/projet3-temp.jpg asset/media/photo/projet3.jpg
mv asset/media/photo/projet4-temp.jpg asset/media/photo/projet4.jpg
mv asset/media/photo/projet5-temp.jpg asset/media/photo/projet5.jpg
mv asset/media/photo/projet6-temp.jpeg asset/media/photo/projet6.jpeg
mv asset/media/photo/3d_skull-temp.png asset/media/photo/3d_skull.png

# 4. Stage final
git add .
git commit -m "renaming directories and files to lowercase to fix case sensitivity"

# 5. Push
git push origin main
