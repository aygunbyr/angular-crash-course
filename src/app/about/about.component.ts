import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  // param: any;
  // queryParam: any;

  // constructor(private activatedRoute: ActivatedRoute) {}
  constructor(private service: ProductService) {}

  // ngOnInit(): void {
  //   this.service.getAllProductsWithLimit().subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //   });
  // }

  ngOnInit(): void {
    const product: ProductRepresentation = {
      title: 'My product',
      description: 'Product description',
      price: 12,
      category: 'Any category',
      image: 'https://some-image.jpg',
    };
    this.service.createProduct(product).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
    });
  }

  // ngOnInit(): void {
  //   this.param = this.activatedRoute.snapshot.params['username'];
  //   this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
  // }
}
