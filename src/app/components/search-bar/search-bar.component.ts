import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiPixabayService } from '../../services/api-pixabay.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  formSearchImage: FormGroup;
  observableApi$: Observable<any>;
  imgResult = '';
  likes = '';
  favorites = '';
  autor = '';
  tags = '';
  constructor(private fb: FormBuilder, private api: ApiPixabayService) {}

  ngOnInit(): void {
    this.formSearchImage = this.fb.group({
      inputSearch: [null],
      selectCategory: [null],
    });

    // this.formSearchImage.get('inputSearch')
    // .valueChanges.subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    // });
  }
  onSubmit(): void {
    console.log(this.formSearchImage.value);
    this.observableApi$ = this.api
      .getImage(this.formSearchImage.value)
      .pipe(map((response) => response.body.hits));
  }

  onClick(item:any): void {
    this.imgResult = item.largeImageURL;
    this.likes = item.likes;
    this.favorites = item.favorites;
    this.autor = item.user;
    this.tags = item.tags;
  }
}
