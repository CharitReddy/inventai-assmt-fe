### To run the application:

Clone this repository.<br/>
cd into the project and at the same level as package.json, run `npm install`.<br/>
Run `npm start` to run the application.<br/>
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Additional Libraries Used`

Material UI.
Material UI Icons.
Material UI.
Axios - For API Requests.

### `App Functionality`

A basic UI which takes a person's name, email, and any info regarding them, and displays 3 emails to use a product.(an invitation, a promotion, and a welcome) emails.

## Home Page

Home page has a form consisting of 3 input fields - to provide name, email, and basic info for a user, and a button to generate the emails based on the provided details.

### Generation

While OpenAI generates the emails, a skeleton is displayed.

### Emails

Generated emails are then displayed on the UI with a bottom navigation consisting of the three tabs to switch between the mails.
Clicking on the "Generate new emails" will take the user to the form again.

### `Technical Details`

-All the components and icons used are from Material UI.<br/>
-Includes a debounce util in case we need to extend to multiple concurrent requests.<br/>
-All JSX is present in the folders Pages and Components according to the hierarchy.<br/>
-Entire business logic is present in 2 custom hooks, useHome and useUserDetails.<br/>
-The services folder has API client and API calls as functions.<br/>
-The utils folder has any reusable functions not specific to any of the above functionality.<br/>
-The translations folder has a translate function that accepts keys as input and displays the corresponding text from a given language file.<br/>
-Only en.ts is present, and although change in language has not been implemented, it can easily be switched. A new language file has to be provided. If it has to be dynamic, a context/global state can be used to switch between the languages.<br/>

### `Folder Structure`

.
├── README.md
├── package-lock.json
├── package.json
├── public
│ ├── assets
│ │ └── images
│ │ ├── app_background.png
│ │ └── image_not_available.png
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ ├── r2-d2_logo.png
│ └── robots.txt
├── src
│ ├── App.css
│ ├── App.test.tsx
│ ├── App.tsx
│ ├── components
│ │ ├── EmailBox
│ │ │ └── index.tsx
│ │ └── UserDetailsForm
│ │ ├── index.tsx
│ │ └── useUserDetails.ts
│ ├── index.css
│ ├── index.tsx
│ ├── logo.svg
│ ├── pages
│ │ └── Home
│ │ ├── index.tsx
│ │ └── useHome.ts
│ ├── react-app-env.d.ts
│ ├── reportWebVitals.ts
│ ├── services
│ │ ├── apiCalls.ts
│ │ └── apiClient.ts
│ ├── setupTests.ts
│ ├── translations
│ │ ├── en.ts
│ │ └── index.ts
│ └── utils
│ └── debounce.ts
└── tsconfig.json

### `env file`

The app has one environment variable for the backend URL.<br/>
Please restart the app whenever the env variable(s) change.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
