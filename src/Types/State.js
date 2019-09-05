import type { Data } from './home';

export type HomeState = {
    data: Data[],
    dataListPage: number,
}

export type ShowLoader = {
    showLoader: Set,
}

export type State = {
    home: HomeState,
    loader: ShowLoader,
}
