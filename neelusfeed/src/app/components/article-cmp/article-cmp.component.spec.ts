import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCmpComponent } from './article-cmp.component';

describe('ArticleCmpComponent', () => {
  let component: ArticleCmpComponent;
  let fixture: ComponentFixture<ArticleCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
