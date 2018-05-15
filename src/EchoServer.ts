import * as http from "http";

export default class EchoServer {

    public static startServer(port: number) : void {
        console.log(`starting server on port: ${port}`);
        http.createServer(function(request,response){
            console.log(`${request.method} ${request.url}`);
            // console.log(request.headers);
            let tim: number;
            let res = "GENERATE FAILED!";
            if (String(request.url).indexOf("APIMSGS") > 0) {
                res = "API: GENERATE FAILED!";
                tim = 1000;
            } else {
                res = "C1: GENERATE FAILED!";
                tim = 100;
            }
        
            request.on('data',function(message){
                console.log(message.toString());
            });
            
            request.on('end',function(){
                console.log("end of request! " + tim);
                setTimeout(() => {
                    response.write(res);
                    response.end();
                }, tim);
                // response.end();
            }); 
        }).listen(port);
    }

}

