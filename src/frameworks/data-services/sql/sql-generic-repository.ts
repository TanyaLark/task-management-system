import { IGenericRepository } from 'src/core/abstracts/generic-repository.abstract';
import { Repository } from 'typeorm';

export class SqlGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }
  getAll(): Promise<T[]> {
    return this._repository.find();
  }
  get(id: any): Promise<T> {
    return this._repository.findOne(id);
  }
  create(item: T): Promise<T> {
    return this._repository.save(item);
  }
  update(id: string, item: any) {
    return this._repository.update(id, item);
  }
  delete(id: string) {
    return this._repository.delete(id);
  }
}
