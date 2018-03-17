export interface IBaseApi<T> {
    get(): Promise<T[]>;
    getById(id: number): Promise<T>;
    post(item: T): Promise<void>;
    put(id: number, item: T): Promise<void>;
    delete(id: number): Promise<void>;
}
