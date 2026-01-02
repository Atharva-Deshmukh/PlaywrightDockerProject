# This Small Project Covers Running Playwright Test Scripts on:

1. A docker container locally (without Playwright installed on the host machine)
2. CI/CD (Github Actions):
- Without Docker, directly on the github runners inside an ubuntu machine
- With docker, docker container inside github runners 

---

## Running Playwright API Tests in Docker container in host machine

### Local Setup and Test Validation

Before using Docker, it is important to verify that your Playwright tests work locally.

#### Steps
1. Install Playwright locally
2. Write a basic API test
3. Run the test locally to ensure it passes

### Running the same playwright

Now, create a dockerfile to run these tests in a docker container

Refer
```
Dockerfile
```

### ONE CHANGE from Cypress docker project here:
```
Install dependencies exactly as locked in yarn.lock

Tried package.lock.json but problem is when we did this in cypress, we had cypress pre-installed in the image -> cypress/included

But in playwright image above, some installations break for package-lock.json because its little strict.

In my case, error was: fsevents missing from lock file

Because package-lock.json was built in windows host machine, but docker run on ubuntu, 
hence when NPM CI was executed in ubuntu, this error was there.

yarn lock is not that strict and doesn't require non-dev installations compulsorily
Hence in playwright docker project, I choose yarn lock
```

Build image based on docker file
```
docker build -t playwright-docker .
```

Run this image and it runs successfully
```
C:\REPOS\PlaywrightDocker> docker run --rm playwright-docker 

Running 3 tests using 1 worker
  3 passed (1.7s)
npm notice
npm notice New minor version of npm available! 11.6.2 -> 11.7.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.7.0
npm notice To update run: npm install -g npm@11.7.0
```

### Running these tests inside a docker container on github actions

All the steps are same as in this repo: https://github.com/Atharva-Deshmukh/CypressDockerProject
 
yml files are adapted to playwright logic with yarn, just this change is there.
Rest everything is same