#!/bin/bash

# Force rename css -> CSS
mv asset/css asset/css_temp
git add asset/css_temp
git commit -m "temp rename css"
mv asset/css_temp asset/CSS
git add asset/CSS
git commit -m "rename css to CSS"

# Force rename js -> JS
mv asset/js asset/js_temp
git add asset/js_temp
git commit -m "temp rename js"
mv asset/js_temp asset/JS
git add asset/JS
git commit -m "rename js to JS"

# Update HTML references
# Using exclude to avoid modifying .git files or scripts
# sed -i '' 's|asset/css|asset/CSS|g' does global replacement
# we also need to handle relative paths like ../css -> ../CSS

find . -name "*.html" -print0 | xargs -0 sed -i '' \
  -e 's|asset/css|asset/CSS|g' \
  -e 's|asset/js|asset/JS|g' \
  -e 's|\.\./css|\.\./CSS|g' \
  -e 's|\.\./js|\.\./JS|g'

# Commit updates
git add .
git commit -m "update code references to uppercase CSS and JS"
git push origin main
