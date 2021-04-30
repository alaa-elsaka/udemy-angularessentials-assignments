import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() items: string[] = [];

  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewItem(){
    this.itemAdded.emit(this.newItem);
    console.log(this.items);
  }

}
