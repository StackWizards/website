FROM node:16-alpine as BUILD_IMAGE
WORKDIR /app
# install dependencies
COPY . .
RUN yarn install
RUN yarn build
FROM node:16-alpine
WORKDIR /app
# copy from build image
COPY --from=BUILD_IMAGE /app/. .
EXPOSE 3000
CMD ["yarn", "start"]

