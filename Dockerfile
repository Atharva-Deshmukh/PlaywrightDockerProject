# Official Playwright image
# noble = Ubuntu 24.04
# Includes Playwright browsers + OS dependencies
# Does NOT include @playwright/test (installed via Yarn below)
FROM mcr.microsoft.com/playwright:v1.57.0-noble

# Set working directory
WORKDIR /myApp

# Copy Yarn dependency files from yarn lock
COPY package.json yarn.lock ./

# Install dependencies exactly as locked in yarn.lock
# Tried package.lock.json but problem is when we did this in cypress, we had cypress pre-installed in the image
# But in playwright image above, some installations break for package-lock.json because its little strict
# yarn lock is not that strict and doesn't require non-dev installations compulsorily
# Hence in playwright docker project, I choose yarn lock
RUN yarn install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Run Playwright API tests
CMD ["npx", "playwright", "test"]
