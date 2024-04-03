FROM oven/bun:latest

WORKDIR /usr/src/app

COPY . .

RUN bun install

EXPOSE 3000

RUN bun run build

CMD ["bun", "run", "start"]
