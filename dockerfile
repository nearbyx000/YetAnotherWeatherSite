# Используем официальный образ httpd (Apache)
FROM node:12.18.1

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .


CMD [ "node", "server.js" ]


# Открываем порт 80
EXPOSE 80

# Команда для запуска Apache
CMD ["httpd-foreground"]