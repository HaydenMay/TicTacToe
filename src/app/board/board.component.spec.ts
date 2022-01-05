import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SquareComponent } from '../square/square.component';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the XisNext on Init', () => {
    expect(component.xIsNext).toBeTrue();
  });

  it('should switch to false when a turn is taken', () => {
    component.makeMove(2);
    expect(component.xIsNext).toBeFalse();
  });

  it('should generate a game board with 9 squares', () => {
    component.newGame();
    expect(component.squares.length).toEqual(9);
  });
});
