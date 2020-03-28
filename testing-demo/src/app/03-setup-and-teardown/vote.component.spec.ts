import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('incrementa o total de votos', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('decrementa o total de votos', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
