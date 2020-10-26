import db from '../sequelize/models';

class UserService {
  static async loginUser(jobId) {
    try {
      const user = await db.User.findOne({ where: { job_id: jobId } });
      if (!user) {
        return null;
      }
      return user;
    } catch (error) {
      return error;
    }
  }
}

export default UserService;
