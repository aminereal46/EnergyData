
export type Data = {
    a: number,
};

export type Filter = {};

type SetDataAction = { type: string, data: Data[] };
type InitDataAction = { type: string };
type NextDataAction = { type: string};
type SetEndOfPageDataAction = { type: string, flag: boolean};
export type DataAction = SetDataAction | InitDataAction | NextDataAction | SetEndOfPageDataAction
export type GetDataAction = { type: string, init: boolean};
