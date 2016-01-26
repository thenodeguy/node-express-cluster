# node-express-cluster
A basic and lean solution for clustering a node express server.

This solution will fork one worker process per CPU core. Each worker will run
an instance of the app.


To install
-
```
$ git clone https://github.com/benjaminvickers/node-express-cluster.git
$ cd node-express-cluster
$ npm install
```


To run
-
```
$ sudo npm start
```


To test:
-
Run the command several times to see responses from both worker processes.
```
$ curl -i -X GET http://localhost:80
```
