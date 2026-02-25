import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  categories: Category[] = [];
  allProducts: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }


  onDeleteProduct(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }

  onLikeProduct(id: number) {
    this.allProducts = this.allProducts.map(p =>
      p.id === id ? { ...p, likes: (p.likes ?? 0) + 1 } : p
    );
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }
}