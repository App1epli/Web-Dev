import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();
  @Output() likeClick = new EventEmitter<number>();

  onLike() {
    this.likeClick.emit(this.product.id);
  }

  requestDelete() {
    this.delete.emit(this.product.id);
  }

  shareWhatsApp() {
    const text = encodeURIComponent(`${this.product.name}\n${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}