ARG VITE_BACKEND_SERVER_ARG=/api
ARG VITE_PUBLIC_URL_ARG=/sctool/optravis

FROM node:lts-alpine as builder
ARG VITE_BACKEND_SERVER_ARG
ARG VITE_PUBLIC_URL_ARG
ENV VITE_BACKEND_SERVER=${VITE_BACKEND_SERVER_ARG}
ENV VITE_PUBLIC_URL=${VITE_PUBLIC_URL_ARG}

WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm config set legacy-peer-deps true
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine-slim as prod
RUN apk update && apk upgrade
ARG VITE_PUBLIC_URL_ARG
ENV VITE_PUBLIC_URL=${VITE_PUBLIC_URL_ARG}

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN sed -i "s|/sctool/optravis|${VITE_PUBLIC_URL}|g" /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80

CMD nginx -g 'daemon off;'