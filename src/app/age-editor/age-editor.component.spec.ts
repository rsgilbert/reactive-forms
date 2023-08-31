import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeEditorComponent } from './age-editor.component';

describe('AgeEditorComponent', () => {
  let component: AgeEditorComponent;
  let fixture: ComponentFixture<AgeEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeEditorComponent]
    });
    fixture = TestBed.createComponent(AgeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
