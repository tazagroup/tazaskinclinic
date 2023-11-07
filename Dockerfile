FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build
FROM alpine:3.16
WORKDIR /app
COPY --from=builder /app/dist ./
EXPOSE 3000
CMD ["node", "main.js"]