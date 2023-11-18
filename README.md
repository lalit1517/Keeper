Catch the live running project at https://xanx2-lyaaa-aaaal-qckia-cai.raw.icp0.io/

# Keeper

"Keeper" is a straightforward and efficient note-keeping website designed to provide users with a seamless platform to organize and store their notes. The site focuses on simplicity and user-friendliness, ensuring that users can easily keep track of their thoughts, ideas, and important information. The core functionality of the site revolves around adding and managing notes, and it doesn't overwhelm users with unnecessary features.

## Features

- The site boasts a clean and intuitive user interface, making it easy for users to navigate and quickly access the features they need.
- Users can create new notes effortlessly by adding a title and the corresponding text. This straightforward process allows for quick and efficient note-taking.
- Responsive design for a consistent experience across devices.

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.

Additionally, if you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 8000.
