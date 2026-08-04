FROM node:14

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 8080
EXPOSE 8081

CMD ["yarn", "serve"]

# to run:
# docker build -t <image-name> .
# docker run -d -p 8080:8080 -p 8081:8081 -v $(pwd):/app <image-name>