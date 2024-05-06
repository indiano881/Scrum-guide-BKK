FROM node:20

WORKDIR /scrum-guide-bkk

COPY src/ /scrum-guide-bkk/src
COPY package.json /scrum-guide-bkk

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "start"]