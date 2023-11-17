# Subscription Management System

Welcome to the Subscription Management System! This system enables users to register for various services under specific conditions. Please read the documentation below to understand how to set up and use this system.

## Table of Contents
- [Introduction](#introduction)
- [System Requirements](#system-requirements)
- [Database Design](#database-design)
- [API Endpoints](#api-endpoints)
- [Postman Collection](#postman-collection)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In this challenge, you will create a subscription management system with specific conditions for registration. The primary key will be the msisdn (mobile number). The msisdn should follow the format of starting with "66" followed by 9 digits. The following conditions must be met for successful registration:

1. A single msisdn can register for more than one service but not more than three services.
2. The msisdn must not be listed in the blacklist table, meaning it is not banned from registering.
3. The same msisdn can register again, but only after 30 days from their last registration.

## System Requirements

- TypeScript and Node.js (or NestJS framework)
- PostgreSQL as the database management system

## Environment Variables

The application uses the following environment variables:

- `PORT`: The port on which the server will run. Default is 4200.
- `GMM_DATABASE_URL`: The URL for connecting to the PostgreSQL database.

Example `.env` configuration:

```env
PORT=4200
GMM_DATABASE_URL=postgresql://postgres:1234@localhost:5432/postgres
```

## Database Setup

To set up the database, execute the following SQL script:

[Download public.sql](public.sql)

### Database Design

#### Table: blacklist
- msisdn: Integer (Primary Key)
- is_blacklist: Boolean (Optional)
- reason: String (Optional, maximum length of 255 characters)
- create_at: DateTime (Optional)
- update_at: DateTime (Optional)

#### Table: services
- id: Integer (Primary Key, auto-incremented)
- name: String (Optional, maximum length of 100 characters)
- description: String (Optional, maximum length of 255 characters)
- is_active: Boolean (Optional)
- subscriptions: One-to-Many Relationship with subscriptions table

#### Table: subscriptions
- msisdn: Integer
- service_id: Integer
- register_at: DateTime (Optional)
- is_delete: Boolean (Default value is false)
- services: Many-to-One Relationship with services table

## API Endpoints

### Registration Logic
- `POST /register`
  - Register a service with an msisdn.

### Get All Service Subscriptions by Mobile Number
- `GET /subscriptions/:msisdn`
  - Retrieve a list of all service subscriptions for a given msisdn.

### Delete Subscription
- `DELETE /subscriptions/:msisdn/:service_id`
  - Delete a specific subscription by providing the msisdn (mobile number) and the service_id of the subscription to be deleted.

### Insert / Delete Blacklist and Update Blacklist Reason
- `GET /blacklist/check/:msisdn`
  - Check if an msisdn is blacklisted and retrieve the reason if it is.

- `POST /blacklist/insert`
  - Add an msisdn to the blacklist along with a reason.

- `PATCH /blacklist/remove/:msisdn`
  - Remove an msisdn from the blacklist.

- `PATCH /blacklist/update-reason/:msisdn`
  - Update the reason for blacklisting a specific msisdn.

## Postman Collection

For sample requests and various scenarios, including successful registrations and error cases, refer to the [Postman Collection](https://elements.getpostman.com/redirect?entityId=9651093-d1ba3cd2-0f1b-492f-a844-c3e05b7cbf37&entityType=collection).

## Installation and Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up PostgreSQL and configure the database connection.
4. Run `npm run pulldb` for pull database to ORM
5. run `npm prisma-generate-gmm` for generate database

## Usage

1. Run the server using `npm run dev`.
2. Access the API endpoints using a tool like Postman or integrate it with your application.

## License

This project is licensed under the [MIT License](LICENSE).