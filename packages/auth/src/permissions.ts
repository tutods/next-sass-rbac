import type { AbilityBuilder } from '@casl/ability';
import type { AppAbility } from '~';
import type { User } from '~/models/user';
import type { Role } from '~/roles';

type PermissionsByRole = (user: User, builder: AbilityBuilder<AppAbility>) => void;

const permissions: Record<Role, PermissionsByRole> = {
  ADMIN(user, { can, cannot }) {
    can('manage', 'all');

    /**
     * Remove the permission to transfer the ownership or update an organization,
     * except if it's the owner.
     */
    cannot(['transfer_ownership', 'update'], 'Organization');
    can(['transfer_ownership', 'update'], 'Organization', {
      ownerId: { $eq: user.id },
    });
  },
  MEMBER(user, { can, cannot }) {
    can('get', 'User');
    can(['create', 'get'], 'Project');

    /**
     * Only allow to update or delete the project if it's the owner of that project.
     */
    cannot(['update', 'delete'], 'Project');
    can(['update', 'delete'], 'Project', {
      ownerId: { $eq: user.id },
    });
  },
  BILLING(_, { can }) {
    can('manage', 'Billing');
  },
};

export { permissions };
