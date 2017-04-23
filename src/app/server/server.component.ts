import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    },
    .offline {
        color: gray;
        }`]
})
export class ServerComponent {
    
    serverStatus = "online";
    serverOwner = "GOAO";

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerOwner() {
        return this.serverOwner;
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green': 'yellow';
    }

}
