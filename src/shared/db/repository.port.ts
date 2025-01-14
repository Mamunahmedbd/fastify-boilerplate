export interface Paginated<T> {
  count: number;
  limit: number;
  page: number;
  data: T[];
}

export type OrderBy = { field: string | boolean; param: 'asc' | 'desc' };

export interface PaginatedQueryParams {
  limit: number;
  page: number;
  offset: number;
  orderBy: OrderBy;
}

export interface RepositoryPort<Entity> {
  insert(entity: Entity | Entity[]): Promise<void>;
  // update(entity: Partial<Entity>): Promise<void>;
  // updateMany(entities: Entity[]): Promise<void>;
  findOneById(id: string): Promise<Entity | undefined>;
  findAll(): Promise<Entity[]>;
  findAllPaginated(params: PaginatedQueryParams): Promise<Paginated<Entity>>;
  delete(entityId: string): Promise<boolean>;
}
