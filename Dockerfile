FROM node:18
WORKDIR /app

# Add package file
COPY package.json yarn.lock ./

# Install deps
RUN yarn install

# Copy source
COPY .env .eslintrc ./
COPY src ./src
COPY prisma-schema ./prisma-schema
COPY nodemon.json ./nodemon.json
COPY tsconfig.json ./tsconfig.json

# Generate prisma client
RUN yarn global add prisma
RUN yarn prisma-generate-test

ENV NODE_PATH=./dist
CMD ["yarn", "build"]
