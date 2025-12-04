# Use the bun image as the base image
FROM oven/bun:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json bun.lock ./

# Install the application dependencies
RUN bun install

# Copy the rest of the application files
COPY . .

ENV DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"
RUN bunx prisma generate

# Build the NestJS application
RUN bun run build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["sh", "-c", "bun run db:deploy && bun run start"]
