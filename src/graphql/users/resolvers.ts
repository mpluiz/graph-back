function getUser() {
  return {
    id: '602',
    firstName: 'Elisa',
    lastName: 'Pereira',
    userName: 'elisa.pereira',
    indexRef: 17,
    createdAt: '2017-02-15T11:29:40.799Z',
  };
}

function getUsers() {
  return [
    {
      id: '602',
      firstName: 'Elisa',
      lastName: 'Pereira',
      userName: 'elisa.pereira',
      indexRef: 17,
      createdAt: '2017-02-15T11:29:40.799Z',
    },
    {
      id: '903',
      firstName: 'Enzo',
      lastName: 'Barros',
      userName: 'enzo_barros',
      indexRef: 18,
      createdAt: '2018-03-28T00:53:08.981Z',
    },
  ];
}

export const usersResolvers = {
  Query: {
    User: getUser,
    Users: getUsers,
  },
};
