#!/usr/bin/env node

import echoServer from "./EchoServer";

const port: number = Number(process.argv[2]) || 8080;

echoServer.startServer(port);

