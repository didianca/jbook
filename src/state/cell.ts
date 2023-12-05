export type CellTypes = 'code' | 'text';

/* the direction in which the cell can be moved */
export type CellDirectionType = 'up' | 'down';

export interface Cell {
  id: string;
  type: CellTypes;
  content: string;
}
