import { USER_ROLES } from '../constants';

const { ADMIN_ROLE, MEMBER_ROLE } = USER_ROLES;

export const hasPaidMail = ({ Subscribed }) => Subscribed & 1;
export const hasPaidVpn = ({ Subscribed }) => Subscribed & 4;
export const isPaid = ({ Subscribed }) => Subscribed;
export const isPrivate = ({ Private }) => Private === 1;
export const isFree = (user) => !isPaid(user);
export const isAdmin = ({ Role }) => Role === ADMIN_ROLE;
export const isMember = ({ Role }) => Role === MEMBER_ROLE;
export const isSubUser = ({ OrganizationPrivateKey }) => typeof OrganizationPrivateKey !== 'undefined';
export const isDelinquent = ({ Delinquent }) => Delinquent;

export const getInfo = (User) => {
    return {
        isAdmin: isAdmin(User),
        isMember: isMember(User),
        isFree: isFree(User),
        isPaid: isPaid(User),
        isPrivate: isPrivate(User),
        isSubUser: isSubUser(User),
        isDelinquent: isDelinquent(User),
        hasPaidMail: hasPaidMail(User),
        hasPaidVpn: hasPaidVpn(User)
    };
};
