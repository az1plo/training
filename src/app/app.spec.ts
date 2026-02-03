import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { USER_CONTEXT } from './core/tokens/user-context.token';
import { LOGGER } from './core/tokens/logger.token';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .overrideComponent(App, {
        add: {
          providers: [
            {
              provide: USER_CONTEXT,
              useValue: {
                set: vi.fn(),
              },
            },
            {
              provide: LOGGER,
              useValue: {
                log: vi.fn(),
                warn: vi.fn(),
                error: vi.fn(),
              },
            },
          ],
        },
      })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render content', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent.length).toBeGreaterThan(0);
  });
});
