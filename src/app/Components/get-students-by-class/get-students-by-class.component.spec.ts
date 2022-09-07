import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStudentsByClassComponent } from './get-students-by-class.component';

describe('GetStudentsByClassComponent', () => {
  let component: GetStudentsByClassComponent;
  let fixture: ComponentFixture<GetStudentsByClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStudentsByClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStudentsByClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
