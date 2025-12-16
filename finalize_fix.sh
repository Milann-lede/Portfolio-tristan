#!/bin/bash
# Force renaming indexH.html to indexh.html and pushing
mv asset/index-high/indexH.html asset/index-high/indexh.html
git add .
git commit -m "fix: enforce lowercase paths and rename indexH.html to indexh.html"
git push origin main
