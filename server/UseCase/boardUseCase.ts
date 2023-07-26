import type { UserId } from '$/commonTypesWithClient/branded';

export type BoardArray = number[][];

const board: BoardArray = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

export const boardUseCase = {
  getBoard: () => board,
  clickBoard: (params: { x: number; y: number }, userId: UserId) => {
    console.log(userId);
    board[params.y][params.x] = 1;
  },
};
