# Trial X - A drug trial management system

> **This project is created for CODE and is a part of the [CODE.berlin](https://code.berlin) challenge.**

## Mission Statement

Pharmaceutical companies require to manage the drug trials they are conducting. The system allows the creation and management of clinical trials and adding patients. The system also provides the ability to manage patients and their medical records.
This project is active on [TrialX](https://trialx.vercel.app/) if you want to check it out.

## Features

- Overview of the drug trial and its patients
- Overview of the patients and their medical records
- Adding and managing patients and their medical records
- Monitoring the patients' records and their health status
- Monitoring allergies, side effects, blood pressure, temperature, antibodies, and other health parameters

## Tech Stack

- React
- Next.js
- Prisma
- PostgreSQL
- REST API
- Tailwind CSS
- OAuth 2.0
- AWS

## Getting Started

To run the project locally, you need to have [Node.js >v.14](https://nodejs.org/en/) installed on your machine.

Copy the `.env.example` file and rename it to `.env`. Then, fill in the environment variables.

```bash
cat .env.example > .env
```

Install the dependencies and run the development server:

```bash
yarn
```

1. create a database in postgres and add the database name to the .env file.
2. create an AWS S3 bucket and add the AWS access key and secret, along with bucket name and its region to the .env file.
3. For GoogleAuth, create a project in Google Cloud Platform and add the client id and secret to the .env file.

once you have done the above steps, run the migrations and start the server.

```bash
npx prisma migrate dev --name init
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to use

The application's homepage provides an overview of the Trial. It shows the Trial information, Sample's information, Adverse Drug reactions, and Average Antibody Levels.

For adding a new patient to the trial, you can head to the Patients page and click on the Add Patient button. This will open a modal where you can add the patient's information.

For adding a new medical record to a patient, you can head to the Patient's page and select the patient's card and click on the Add New Record button. This will open a modal where you can add the medical record's information, including:

- Blood Pressure
- Temperature
- Antibody Levels

## Future Improvements

- Update a patient's health status based on the medical records
- Ability to add a new drug trial
- Ability to add customize medical tests to the drug trial
- User access control for different roles
- Alert system for the patients' health status
- Shared team calendar for trial management and chat system
