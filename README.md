# HikayatLedger

A React Native mobile application for personal and business financial tracking. HikayatLedger helps users manage their financial records, track transactions, and maintain organized ledger entries.

## Future Direction

After working on this task given by recruiter, I'm thinking of developing this project into a full-featured **Invoice and Quotation Generator**. Planned features include:

- Create and manage professional invoices
- Generate quotations for clients
- Export documents as PDF
- Client management
- Payment tracking

---

## Getting Started

### Prerequisites

Make sure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

**Requirements:**

- Node.js >= 20
- Yarn package manager
- Xcode (for iOS development)
- Android Studio (for Android development)

---

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/HikayatLedger.git
cd HikayatLedger
```

### 2. Install Dependencies

```sh
yarn install
```

### 3. Set Up Environment Variables

This project requires environment variables to connect to Supabase and other services.

1. Create a `.env` file in the root of the project:

```sh
touch .env
```

2. Copy the environment variables from the email provided and paste them into the `.env` file.

The `.env` file should look something like this:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
# Add other environment variables as needed
```

> **Note:** Never commit your `.env` file to version control. It is already included in `.gitignore`.

### 4. iOS Setup

For iOS, install CocoaPods dependencies:

```sh
# Install Ruby bundler dependencies (first time only)
bundle install

# Install CocoaPods dependencies
yarn pod
```

---

## Running the App

### Start Metro Bundler

```sh
yarn start
```

### Run on Android

```sh
yarn android
```

### Run on iOS

```sh
yarn ios
```

---

## Useful Scripts

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `yarn start`         | Start Metro bundler                |
| `yarn start:reset`   | Start Metro with cache reset       |
| `yarn android`       | Run app on Android                 |
| `yarn ios`           | Run app on iOS                     |
| `yarn lint`          | Run ESLint                         |
| `yarn format`        | Format code with Prettier          |
| `yarn test`          | Run tests                          |
| `yarn clean`         | Full clean and reinstall           |
| `yarn clean:android` | Clean Android build                |
| `yarn clean:ios`     | Clean iOS build and reinstall pods |
| `yarn pod`           | Install iOS CocoaPods              |
| `yarn pod:update`    | Update iOS CocoaPods               |

---

## Troubleshooting

If you encounter issues:

1. **Clear all caches:**

   ```sh
   yarn clean
   ```

2. **Reset Metro cache:**

   ```sh
   yarn start:reset
   ```

3. **For iOS specific issues:**

   ```sh
   yarn clean:ios
   ```

4. **For Android specific issues:**
   ```sh
   yarn clean:android
   ```

For more help, see the [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting) guide.

---

## Tech Stack

- **React Native** - Mobile framework
- **TypeScript** - Type-safe JavaScript
- **Supabase** - Backend and database
- **Redux Toolkit & Zustand** - State management
- **React Navigation** - Navigation
- **React Hook Form + Yup** - Form handling and validation
- **i18next** - Internationalization
- **date-fns** - Date utilities

---

## License

This project is private and proprietary.
