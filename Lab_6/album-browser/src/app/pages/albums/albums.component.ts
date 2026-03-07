import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  loading = false;
  errorMsg = '';
  albums: Album[] = [];

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.loading = true;
    this.errorMsg = '';

    this.albumService
      .getAlbums()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data: Album[]) => (this.albums = data),
        error: () => (this.errorMsg = 'Не удалось загрузить альбомы.'),
      });
  }

  openAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, ev: MouseEvent): void {
    ev.stopPropagation();

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((a) => a.id !== id);
      },
      error: () => alert('Не удалось удалить альбом.'),
    });
  }

  trackById(_: number, a: Album): number {
    return a.id;
  }
}