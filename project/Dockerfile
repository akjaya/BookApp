FROM node
RUN mkdir -p /usr/src/app
EXPOSE 8008
WORKDIR /usr/src/app
COPY dist /usr/src/app/dist
RUN npm install -g http-server
CMD ["http-server","dist/project", "--port=8008"]
