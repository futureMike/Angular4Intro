import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  itemsInCart = 0;
  cartStatus = 'your cart has '+ this.itemsInCart+' items.';
  serverCreated = false;
  serverName = 'HDSS1';
  customer = '';
  servers = ['Buckwheat', 'J-Roc'];



  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = " Hardley Dangerous store server created and open for business: " + new Date();
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  onAddItemToCart(){
    this.itemsInCart += 1;
    this.cartStatus = "YAY! Total items in cart: "+ this.itemsInCart +".";
  }
  onRemoveItemFromCart(){
    this.itemsInCart -= 1;
    this.cartStatus = "Booo! Total items in cart: " + this.itemsInCart + " items";
  }
  onClearCustomer(){
    this.customer = '';
  }

}
