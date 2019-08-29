# build environment

# base image
FROM node:10.16.3-jessie as builder

# set working directory
RUN git clone https://github.com/MartianLee/react-nextjs.git app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
#COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

# production environment
#FROM nginx:1.13.9-alpine
#COPY --from=builder /app/.next /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# start app
#CMD ["yarn", "run", "dev"]