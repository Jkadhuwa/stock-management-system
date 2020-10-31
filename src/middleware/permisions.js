import AccessControl from 'accesscontrol';

import roles from './roles';

const ac = new AccessControl(roles);

const grantAccess = (action, resource) => {
  return async (req, res, next) => {
    const permission = ac.can(req.userData.role)[action](resource);
    if (!permission.granted) {
      return res.status(401).json({
        error: "You don't have enough permission to perform this action"
      });
    }
    return next();
  };
};

export default grantAccess;
