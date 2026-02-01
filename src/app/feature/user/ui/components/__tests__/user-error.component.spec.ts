import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserErrorComponent } from '../user-error.component';

describe('UserErrorComponent', () => {
  let fixture: ComponentFixture<UserErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserErrorComponent);
  });

  it('renders INVALID_AGE error', () => {
    fixture.componentInstance.error = { type: 'INVALID_AGE' };
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent)
      .toContain('Invalid age');
  });

  it('renders NOT_AUTHENTICATED error', () => {
    fixture.componentInstance.error = { type: 'NOT_AUTHENTICATED' };
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent)
      .toContain('Please login');
  });
});
