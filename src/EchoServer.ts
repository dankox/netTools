import * as http from "http";
import * as readlinesync from "readline-sync";

export default class EchoServer {

    public static startServer(port: number) : void {
        console.log(`starting server on port: ${port}`);
        http.createServer(function(request,response){

            console.log(`${request.method} ${request.url}`);
            console.log(`\n## Request Header ##`);
            console.log(JSON.stringify(request.headers, null, 2));
            console.log(`## End of Header ##\n`);
      
            request.on('data',function(message){
                console.log(message.toString());
            });
            
            request.on('end',function(){
                let myText : String = "";
                let myResponse : String = "";
                let first : boolean = true;
                do {
                    if (!first) {
                        myResponse += `${myText}\n`;
                    } else {
                        first = false;
                    }
                    myText = readlinesync.prompt();
                } while (myText != ":q" && myText != "quit")

                response.write(myResponse);
                response.end();
            }); 
        }).listen(port);
    }

}

