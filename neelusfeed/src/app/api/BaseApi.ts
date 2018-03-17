
import { IBaseApi } from '../interfaces/IBaseApi';
import { Http, Response } from '@angular/http';
import { Constants } from './constants';
import { Mock } from './MockData/Mock';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseApi<T> implements IBaseApi<T> {
    public baseUrl: string;
    constructor(public http?: Http) {
    }

    public get(): Promise<T[]> {
        return new Promise<T[]>((resolve, reject) => {
            if (Constants.useMock) {
                resolve(Mock.MockData.getList());
            } else {
                this.http.get(this.baseUrl).subscribe((res: Response) => {
                    resolve(res.json());
                }, (err) => reject(err));
            }
        });
    }

    public getById(id: number): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.http.get(this.baseUrl).subscribe((res: Response) => {
                resolve(res.json());
            }, (err) => reject(err));
        });
    }

    public post(item: T): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.http.post(this.baseUrl, item).subscribe((res: Response) => {
                resolve();
            }, (err) => reject(err));
        });
    }

    public put(id: number, item: T): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (id <= 0) {
                reject('Id is required');
            }
            this.http.put(this._getUrlWithKey(id), item).subscribe((res: Response) => {
                resolve(res.json());
            }, (err) => reject(err));
        });
    }

    public delete(id: number): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.http.delete(this._getUrlWithKey(id)).subscribe((res: Response) => {
                resolve(res.json());
            }, (err) => reject(err));
        });
    }

    private _getUrlWithKey(key: any): string {
        return `${this.baseUrl}/${key}`;
    }
}
