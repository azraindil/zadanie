import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSecondTableComponent } from './users-second-table.component';

describe('UsersSecondTableComponent', () => {
  let component: UsersSecondTableComponent;
  let fixture: ComponentFixture<UsersSecondTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSecondTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSecondTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
