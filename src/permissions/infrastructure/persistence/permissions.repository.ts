import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Permissions } from '../../domain/permissions';

export abstract class PermissionsRepository {
  abstract create(
    data: Omit<Permissions, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Permissions>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Permissions[]>;

  abstract findById(id: Permissions['id']): Promise<NullableType<Permissions>>;

  abstract update(
    id: Permissions['id'],
    payload: DeepPartial<Permissions>,
  ): Promise<Permissions | null>;

  abstract remove(id: Permissions['id']): Promise<void>;
}
