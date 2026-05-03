# ---------- STEP 1: Build Frontend ----------
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- STEP 2: Run Backend + Serve Frontend ----------
FROM node:18-alpine

WORKDIR /app

# copy backend folder
COPY backend ./backend

# install backend dependencies
WORKDIR /app/backend
RUN npm install

# go back to root
WORKDIR /app

# copy frontend build
COPY --from=build /app/dist ./frontend

# install static server
RUN npm install -g serve

# expose ports
EXPOSE 3000
EXPOSE 5000

# run both backend + frontend
CMD ["sh", "-c", "node backend/server.js & serve -s frontend -l 3000"]
