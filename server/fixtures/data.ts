import mongoose from 'mongoose';

const user1Id = mongoose.Types.ObjectId();

const data = {
  users: [
    {
      _id: user1Id,
      image: 'https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_960_720.jpg',
      email: 'test1@mail.ru',
      displayname: 'Vasia Pupkin',
      username: 'Vas228',
      about: 'About test user info 1',
      password: '123456',
      role: 'админ',
    },
    {
      _id: mongoose.Types.ObjectId(),
      image: 'https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_960_720.jpg',
      email: 'test2@mail.ru',
      displayname: 'Petro Ivanov',
      username: 'pet322BEST',
      about: 'About test user info 2',
      password: '123456',
    }
  ],
  portfolios: [
    {
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016',
      user: user1Id,
    },
    {
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013',
      user: user1Id,
    },
    {
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011',
      user: user1Id,
    }
  ]
}

export default data;
