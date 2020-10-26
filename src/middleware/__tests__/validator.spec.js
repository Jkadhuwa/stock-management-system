import validator from '../validator';

describe('Login Validator', () => {
  let res = {};
  const next = jest.fn();
  beforeEach(() => {
    const mockResponse = () => {
      res.status = jest.fn().mockReturnValue(res);
      res.json = jest.fn().mockReturnValue(res);
      return res;
    };
    res = mockResponse();
  });

  describe('Validate email', () => {
    it('Should return a error when incorrect email is passed', () => {
      const loginValidator = jest.spyOn(validator, 'loginValidation');
      const req = {
        body: { jobId: 245, password: 'Uninet4' },
      };
      validator.loginValidation(req, res, next);
      expect(loginValidator).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'JobId must be a valid Evergreen JobId' });
    });

    it('Should return a error when password is empty', () => {
      const loginValidator = jest.spyOn(validator, 'loginValidation');
      const req = {
        body: { jobId: 'M003', password: '' },
      };
      validator.loginValidation(req, res);
      expect(loginValidator).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'password is not allowed to be empty' });
    });
    it('Should call next function', () => {
      const loginValidator = jest.spyOn(validator, 'loginValidation');
      const req = {
        body: { jobId: 'M003', password: 'kcnkscnksdcn' },
      };
      validator.loginValidation(req, res, next);
      expect(loginValidator).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });
});
