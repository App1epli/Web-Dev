import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';

import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  albumId = 0;
  loading = false;
  errorMsg = '';
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.albumId) {
      this.errorMsg = 'Некорректный ID.';
      return;
    }
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.loading = true;
    this.errorMsg = '';

    this.albumService
      .getAlbumPhotos(this.albumId)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data: Photo[]) => (this.photos = data),
        error: () => (this.errorMsg = 'Не удалось загрузить фотографии.'),
      });
  }

  back(): void {
    this.router.navigate(['/albums', this.albumId]);
  }

  trackById(_: number, p: Photo): number {
    return p.id;
  }
}