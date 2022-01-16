# Sveltekit Template with extra tools
##### find more tools [here](https://sveltesociety.dev)
you can delete everything in src/routes except \_\_error.svelte and \_\_layout.svelte
## \_\_layout.svelte 
\_\_layout.svelte is used for making a layout every page follows, each directory can have its own \_\_layout eg. the top level \_\_layout has a navbar and a footer with content in the middle, the \_\_layout.svelte in /settings has a side menu with links to each setting (or auto genereted links)  


To start run
```
npm i
```
## Testing
```bash
npm run dev
```
## publishing (netlify)
1. Create a [Netlify Account](https://app.netlify.com)
2. Create a github repository using [The github UI](https://github.com) OR [The github CLI](https://github.com/cli/cli#installation)
### UI
After creating the repo (as you usually do) run
```bash
git init # if you havent already
git remote add origin github.com/<username>/<repo>.git
git add .
git commit -am "Initial commit"
git branch -M main
git push --set-upstream origin main
```
### CLI
```bash 
git init # if you havent already
gh repo create # this will ask the repo name and if you want to add remote.
git add .
git commit -am "Inition commit"
git push --set-upstream origin master
```
3. Add your repo to netlify. If you have created your account you should be able to login to the [Netlify Console](https://app.netlify.com), here you can create your team and link github account, after doing so create the app from your github repo