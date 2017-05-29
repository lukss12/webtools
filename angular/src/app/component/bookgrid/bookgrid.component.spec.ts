import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookgridComponent } from './bookgrid.component';

describe('BookgridComponent', () => {
  let component: BookgridComponent;
  let fixture: ComponentFixture<BookgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
