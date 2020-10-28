import db from '../sequelize/models';

class UserService {
  static async loginUser(jobId) {
    const user = await db.User.findOne({ where: { job_id: jobId } });
    return user;
  }
}

export default UserService;
