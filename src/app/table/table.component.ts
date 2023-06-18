import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'products ', 'quantity', 'price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
   products : string;
  id: number;
  quantity: number;
  price: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, products  : 'Apparels', quantity: 20, price: '100000/-'},
  {id: 2, products  : 'Mobile phones', quantity: 30, price: '250000/-'},
  {id: 3, products  : ' Books', quantity: 50, price: '100000/-'},
  {id: 4, products  : 'Stationery', quantity: 20, price: '200000/-'},
  {id: 5, products  : 'Consumer electronics', quantity: 30, price: '400500/-'},
  {id: 6, products  : 'Footwear', quantity: 15, price: '3000000/-'},
  {id: 7, products  : 'Jewellery', quantity: 15, price: '500000/-'},
  {id: 8, products  : 'Fashion accessories', quantity: 30, price: '450000/-'},
  {id: 9, products  : 'Beauty products', quantity: 20, price: '250000/-'},
  {id: 10, products  : 'Computer accessories and software', quantity: 15, price: '6000000/-'},
  {id: 11, products  : 'Toys and games', quantity: 50, price: '100000/-'},
  {id: 12, products  : 'Personal hygiene essentials', quantity: 15, price: '230000/-'},
  {id: 13, products  : 'Home decor items', quantity: 30, price: '340000/-'},
  {id: 14, products  : ' Kitchenware', quantity: 20, price: '250000/-'},
  {id: 15, products  : 'Household appliances', quantity: 30, price: '3000000/-'},
  {id: 16, products  : 'Sporting goods', quantity: 50, price: '150000/-'},
  {id: 17, products  : 'Fitness equipment', quantity: 15, price: '3500000/-'},
  {id: 18, products  : 'Convenience foods', quantity: 20, price: '100000/-'},
  {id: 19, products  : 'Health supplements', quantity: 30, price: '3000000/-'},
  {id: 20, products  : 'Customised gifts', quantity: 50, price: '100000/-'},
];


