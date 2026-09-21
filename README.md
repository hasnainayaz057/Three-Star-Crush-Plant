# Three Star Crush Plant

A small customer shopping app and separate admin dashboard for the Three Star Crush Plant.

## Files

- `indexcustomer.html` - Customer shopping application.
- `indexadmin.html` - Admin dashboard for products, customers, and orders.
- `index.js` - Shared browser storage and account utilities.
- `style.css` - Shared application styling.
- `crush-10mm.svg`, `crush-20mm.svg`, `fine-crush.svg`, `building-sand.svg` - Local material artwork used when internet images are unavailable.

## Run it

1. Keep all project files in the same folder.
2. Double-click `indexcustomer.html` to open the customer app.
3. Double-click `indexadmin.html` to open the admin dashboard.
4. The two pages share products, orders, and customer accounts through browser `localStorage`.

The demo admin password is `1122`.

## Important limitation

This version is a front-end demo. Data is stored only in the browser where the files are opened. Verification codes are displayed on screen for demo purposes and are not sent by real email or SMS. For a live business app, connect Firebase Authentication and Firestore or a similar backend before publishing.

## Upload to GitHub

### Easiest method: GitHub website

1. Go to `https://github.com` and create an account or sign in.
2. Click the `+` button in the top-right corner.
3. Choose `New repository`.
4. Name it `three-star-crush-plant`.
5. Choose `Public` if you want GitHub Pages to be able to publish it easily.
6. Click `Create repository`.
7. Click `Add file`, then `Upload files`.
8. Open the local project folder and select these files:
   - `indexcustomer.html`
   - `indexadmin.html`
   - `index.js`
   - `style.css`
   - `README.md`
   - `.gitignore`
9. Drag them into the GitHub upload page.
10. Scroll down and click `Commit changes`.

### Publish the customer app with GitHub Pages

1. Open your repository on GitHub.
2. Click `Settings`.
3. Click `Pages` in the left menu.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and `/ (root)` folder.
6. Click `Save`.
7. After GitHub finishes publishing, open the shown website URL and add `/indexcustomer.html` to the end.

The admin page is available at the same URL with `/indexadmin.html` at the end. Do not publish this demo publicly as a real business system until authentication and database security are added.

## GitHub Desktop method

1. Install GitHub Desktop from `https://desktop.github.com`.
2. Sign in with your GitHub account.
3. Choose `File > Add local repository`.
4. Select this project folder.
5. Click `Publish repository`.
6. Choose a repository name and click `Publish repository`.
