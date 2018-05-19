import { TestBed, inject } from '@angular/core/testing';

import { MyAnimeListService } from './my-anime-list.service';

describe('MyAnimeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAnimeListService]
    });
  });

  it('should be created', inject([MyAnimeListService], (service: MyAnimeListService) => {
    expect(service).toBeTruthy();
  }));
});
