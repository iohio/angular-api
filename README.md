# Subscription Management System

Welcome to the Subscription Management System! This system enables users to register for various services under specific conditions. Please read the documentation below to understand how to set up and use this system.

## Table of Contents
- [Introduction](#introduction)
- [System Requirements](#system-requirements)
- [API Endpoints](#api-endpoints)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction



## System Requirements

- TypeScript and Node.js (or NestJS framework)
- MySql as the database management system

## Environment Variables

The application uses the following environment variables:

- `PORT`: The port on which the server will run. Default is 4200.
- `ANGULAR_DATABASE_URL`: The URL for connecting to the PostgreSQL database.

Example `.env` configuration:

```env
PORT=4600
ANGULAR_DATABASE_URL=mysql://{user}:{password}@localhost:3306/{Your Database}
```

## Table Setup

To set up the database, execute the following SQL script:

```
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `uuid` varchar(55) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `first_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `last_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `company` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `education` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `experience` int NULL DEFAULT NULL,
  `email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `date_of_birth` date NULL DEFAULT NULL,
  `created_date` datetime NULL DEFAULT NULL,
  `updated_date` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

```

## API Endpoints
### Add Employee (Create)

- **Endpoint:** `POST /employees`
- **Description:** Adds a new employee to the system.
- **Request:**
  - Method: `POST`
  - URL: `http://localhost:4600/employees`
  - Body:
    ```json
    {
      "name": "John Doe",
      "position": "Software Engineer",
      "department": "IT"
      // ... other employee details
    }
    ```
- **Response:**
  - Status: `201 Created`
  - Body:
    ```json
    {
      "id": 123,
      "message": "Employee added successfully"
    }
    ```

### Update Employee

- **Endpoint:** `PUT /employees/:id`
- **Description:** Updates information for a specific employee.
- **Request:**
  - Method: `PUT`
  - URL: `http://localhost:4600/employees/:id`
  - Body:
    ```json
    {
      "name": "Updated Name",
      "position": "Updated Position",
      "department": "Updated Department"
      // ... other updated employee details
    }
    ```
- **Response:**
  - Status: `200 OK`
  - Body:
    ```json
    {
      "message": "Employee updated successfully"
    }
    ```

### Get Employee List (Read)

- **Endpoint:** `GET /employees`
- **Description:** Retrieves a list of all employees.
- **Request:**
  - Method: `GET`
  - URL: `http://localhost:4600/employees`
- **Response:**
  - Status: `200 OK`
  - Body:
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "position": "Software Engineer",
        "department": "IT"
        // ... other employee details
      },
      // ... other employees
    ]
    ```

### Delete Employee

- **Endpoint:** `DELETE /employees/:id`
- **Description:** Deletes a specific employee from the system.
- **Request:**
  - Method: `DELETE`
  - URL: `http://localhost:4600/employees/:id`
- **Response:**
  - Status: `204 No Content`
  - Body: None

## Installation and Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up Mysql and configure the database connection.
4. Run `npm run pulldb` for pull database to ORM
5. run `prisma-generate-test` for generate database

## Usage

1. Run the server using `npm run dev`.
2. Access the API endpoints

## License

This project is licensed under the [MIT License](LICENSE).