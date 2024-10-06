import { AbilityBuilder, type CreateAbility, type MongoAbility, createMongoAbility } from '@casl/ability';
import type { AppAbilities } from '~/abilities';
import type { User } from '~/models/user';
import { permissions } from '~/permissions';

type AppAbility = MongoAbility<AppAbilities>;

const createAppAbility = createMongoAbility as CreateAbility<AppAbility>;

function defineAbilityFor(user: User) {
  const builder = new AbilityBuilder(createAppAbility);

  if (typeof permissions[user.role] !== 'function') {
    throw new Error(`Permissions for role ${user.role} not found!`);
  }

  permissions[user.role](user, builder);

  return builder.build({
    detectSubjectType(subject) {
      return subject.__typename;
    },
  });
}

export { defineAbilityFor };
export type { AppAbility, AppAbilities };

export * from './models';
