import PortfolioModel from '../models/PortfolioModel';
import data from './data';

class FakePortfolios {

  async populate() {
    await this.clean();
    await this.add();
  }

  async add() {
    await PortfolioModel.create(data.portfolios);
  }

  async clean() {
    await PortfolioModel.deleteMany({});
  }
}

export default new FakePortfolios();
