import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];

 
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() likeProduct = new EventEmitter<number>();

  onDelete(id: number) {
    this.deleteProduct.emit(id);
  }

  onLike(id: number) {
    this.likeProduct.emit(id);
  }
}