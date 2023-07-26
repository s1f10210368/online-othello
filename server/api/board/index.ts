import type { BoardArray } from '$/UseCase/boardUseCase';

export type Methods = {
  get: {
    resBody: BoardArray;
  };
  post: {
    reqBody: { x: number; y: number };
  };
};
