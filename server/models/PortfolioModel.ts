import connection from '../libs/db';
import { Schema } from 'mongoose';

const PortfolioSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: [128, 'the title length is too long'],
  },
  company: String,
  companyWebsite: String,
  location: String,
  jobTitle: String,
  description: String,
  startDate: Date,
  endDate: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default connection.model('Portfolio', PortfolioSchema);