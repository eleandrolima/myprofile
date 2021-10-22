import { Hydra, HydraCollection } from '~/resources/abstract.resource'
import { ResourceInterface } from '~/resources/contracts/resource.interface'
import { ResourceCollectionInterface } from '~/resources/contracts/resource.collection.interface'

export class UserCollection extends HydraCollection implements ResourceCollectionInterface {
  'hydra:member': User[];
}

export class User extends Hydra implements ResourceInterface {
  id: number|null = null
  firstName: string|null = null
  lastName: string|null = null
  role: string|null = null
  slug: string|null = null
  profileImage: string|null = null
  backgroundImage: string|null = null
}
