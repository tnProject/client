import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.component.service';
import {ProductEntity} from './../core/entities';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (res) => {
      this.products = res;
    },
      (err) =>{
        console.log('loi');
      }
    );
  }

}
