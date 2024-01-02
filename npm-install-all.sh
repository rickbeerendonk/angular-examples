find . -type d -maxdepth 6 -not -path "*node_modules*" -exec test -e "{}/package.json" ';' -print | xargs -P 10 -I {} bash -c 'cd "{}" && pwd && npm install'
