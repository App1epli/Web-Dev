import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject, EMPTY } from 'rxjs';
import { catchError, finalize, switchMap, takeUntil, timeout } from 'rxjs/operators';

import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit, OnDestroy {
  loading = false;
  errorMsg = '';
  album: Album | null = null;

  editedTitle = '';
  saving = false;

  private destroy$ = new Subject<void>();
  private lastId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap((pm: ParamMap) => {
          const id = Number(pm.get('id'));
          this.lastId = id;

          this.loading = true;
          this.errorMsg = '';
          this.album = null;
          this.editedTitle = '';
          if (!id || Number.isNaN(id)) {
            this.errorMsg = 'Invalid album id.';
            return EMPTY.pipe(finalize(() => (this.loading = false)));
          }

          return this.albumService.getAlbum(id).pipe(
            timeout(8000),
            catchError(() => {
              this.errorMsg = 'Failed to load album (request error or timeout).';
              return EMPTY;
            }),
            finalize(() => {
              this.loading = false;
              this.cdr.detectChanges();

            })
          );
        })
      )
      .subscribe((a: Album) => {
        this.album = a;
        this.editedTitle = a.title;
      });
  }

  retry(): void {
    const id = this.lastId;
    if (!id || Number.isNaN(id)) return;

    this.router.navigateByUrl('/albums', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/albums', id]);
    });
  }

  save(): void {
    if (!this.album) return;

    const title = this.editedTitle.trim();
    if (!title) {
      this.errorMsg = 'Title cannot be empty.';
      return;
    }

    const updated: Album = { ...this.album, title };

    this.saving = true;
    this.errorMsg = '';

    this.albumService
      .updateAlbum(updated)
      .pipe(
        timeout(8000),
        catchError(() => {
          this.errorMsg = 'Failed to save changes (request error or timeout).';
          return EMPTY;
        }),
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe((res: Album) => {
        this.album = res;
        this.editedTitle = res.title;
      });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  viewPhotos(): void {
    if (!this.album) return;
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}