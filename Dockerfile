FROM caddy:2-alpine
COPY /dist /usr/share/caddy
EXPOSE 80