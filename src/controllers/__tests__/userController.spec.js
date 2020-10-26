import UserController from '../userController';

describe('User Controller', () => {
  let res = {};
  beforeEach(() => {
    const mockResponse = () => {
      res.status = jest.fn().mockReturnValue(res);
      res.json = jest.fn().mockReturnValue(res);
      return res;
    };
    res = mockResponse();
  });

  describe('Login the Seeded User', () => {
    it('Should return a error when wrong credentials', async () => {
      const login = jest.spyOn(UserController, 'userLogin');
      const req = {
        body: { jobId: '02', password: 'Uninet4' },
      };
      await UserController.userLogin(req, res);
      expect(login).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'JobId or Password is incorrect!!' });
    });

    it('Should return a token when successfully logged in', async () => {
      const login = jest.spyOn(UserController, 'userLogin');
      const req = {
        body: { jobId: 'M001', password: 'Uninet41234' },
      };
      await UserController.userLogin(req, res);
      expect(login).toHaveBeenCalled();
      expect(res.json).toBeDefined();
    });
    it('Should return a error when wrong credentials', async () => {
      const login = jest.spyOn(UserController, 'userLogin');
      const req = {
        body: { jobId: 'M002', password: 'Uninet41234' },
      };
      await UserController.userLogin(req, res);
      expect(login).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'JobId or Password is incorrect!!' });
    });
  });
});
