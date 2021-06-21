class Portfolio {

  public Model: any;

  constructor(model: any) {
    this.Model = model;
  }

  async getAll() {
    return await this.Model.find();
  }

  async getById(id: string) {
    return await this.Model.findById(id);
  }

  async create(portfolio: any) {
    return await this.Model.create(portfolio);
  }

  async findAndUpdate(id: string, portfolio: any) {
    return await this.Model.findOneAndUpdate({ _id: id }, portfolio, { new: true });
  }

  async asyncfindAndDelete(id: string) {
    const portfolio = await this.Model.findOneAndRemove({ _id: id });
    return portfolio?._id;
  }

}

export default Portfolio;
