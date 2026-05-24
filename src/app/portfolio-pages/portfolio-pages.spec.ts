import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPages } from './portfolio-pages';

describe('PortfolioPages', () => {
  let component: PortfolioPages;
  let fixture: ComponentFixture<PortfolioPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
