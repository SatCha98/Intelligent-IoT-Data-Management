# Run Instructions

## 1. Run the project using Docker

### Prerequisites
- Docker Desktop installed and running.
- `docker compose` available.
- Project root: `c:\IOT\Intelligent-IoT-Data-Management`

### Start the services
1. Open a terminal in:
   - `c:\IOT\Intelligent-IoT-Data-Management\Docker`
2. Run:
   ```powershell
   docker compose up -d
   ```
3. Wait for Docker to pull/build images and start containers.

### Confirm the services are running
- Check status:
  ```powershell
  docker compose ps
  ```
- Expected services in the `docker-compose.yaml` file:
  - `db` (PostgreSQL)
  - `backend` (Django or Node backend)
  - `frontend` (React/Node frontend)
  - `cadvisor`
  - `prometheus`
  - `grafana`

### Stop the Docker stack
```powershell
docker compose down
```

### Notes
- The Docker Compose file maps frontend to port `5173` on the host.
- If your Docker Compose configuration needs adjustment, check `Docker/docker-compose.yaml`.

## 2. Run the frontend locally

### Prerequisites
- Node.js and npm installed.
- Use the frontend folder in the repository: `new-frontend/frontend`.

### Install dependencies
1. Open a terminal in:
   - `c:\IOT\Intelligent-IoT-Data-Management\new-frontend\frontend`
2. Run:
   ```powershell
   npm install
   ```

### Start the frontend development server
```powershell
npm run dev
```

### Open the app
- Visit: `http://localhost:5173` (works for both local Vite dev and Docker Compose)

### Backend connection
- If you also need the backend locally, start it separately in the `backend` folder.
- The default backend service in Docker listens on port `8000`.

### Optional frontend preview
```powershell
npm run preview
```

## 3. Troubleshooting
- If the frontend does not load, make sure the server is running at `http://localhost:5173`.
- If the backend API is not reachable, verify the backend container is healthy or run the backend locally.
- If Docker fails because a folder path is missing, check the `Docker/docker-compose.yaml` service paths.
