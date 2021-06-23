import PortfolioModel from '../models/PortfolioModel';
import UserModel from '../models/UserModel';
import data from './data';

class FakeDB {
  async populate() {
    await this.clean();
    await this.add();
  }

  async add() {
    await PortfolioModel.create(data.portfolios);
    await UserModel.create(data.users);
  }

  async clean() {
    await PortfolioModel.deleteMany({});
    await UserModel.deleteMany({});
  }
}

export default new FakeDB();
