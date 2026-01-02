# This Small Project Covers Running Playwright Test Scripts on:

1. A docker container locally (without Playwright installed on the host machine)
2. CI/CD (Github Actions):
- Without Docker, directly on the github runners inside an ubuntu machine
- With docker, docker container inside github runners 

---

## Running Playwright API Tests in Docker container in host machine

### 1. Local Setup and Test Validation

Before using Docker, it is important to verify that your Playwright tests work locally.

#### Steps
1. Install Playwright locally
2. Write a basic API test
3. Run the test locally to ensure it passes