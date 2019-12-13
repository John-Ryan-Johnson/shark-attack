const students = [
  {
    id: 'student1',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: false,
    imgUrl: 'https://avatars1.githubusercontent.com/u/39807157?s=460&v=4',
  },
  {
    id: 'student2',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/47763728?s=460&v=4',
  },
  {
    id: 'student3',
    firstName: 'Charity',
    lastName: 'Bunyon',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/52020883?s=460&v=4',
  },
  {
    id: 'student4',
    firstName: 'Connor',
    lastName: 'Sullivan',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/54124397?s=460&v=4',
  },
  {
    id: 'student5',
    firstName: 'Crystal',
    lastName: 'Broach',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/51486216?s=460&v=4',
  },
  {
    id: 'student6',
    firstName: 'Denise',
    lastName: 'Baker',
    isDead: false,
    imgUrl: 'https://avatars3.githubusercontent.com/u/38984447?s=460&v=4',
  },
  {
    id: 'student7',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    isDead: false,
    imgUrl: 'https://media.licdn.com/dms/image/C4D03AQFcpZ2ICMEBgg/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=kD-Fr-AIgrXw9dbeMwnafFS964rXoC-Jcq446uQkRRM',
  },
  {
    id: 'student8',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    isDead: false,
    imgUrl: 'https://media.licdn.com/dms/image/C4E03AQHV1JqqaLFBxQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=zWYumR02uDrpaVUT8T4FBjWesIOzk5z1fVeGudf7FVw',
  },
  {
    id: 'student9',
    firstName: 'Gabriel',
    lastName: 'Seals',
    isDead: false,
    imgUrl: 'https://avatars1.githubusercontent.com/u/52087296?s=460&v=4',
  },
  {
    id: 'student10',
    firstName: 'Ivan',
    lastName: 'Phelps',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/21040719?s=460&v=4',
  },
  {
    id: 'student11',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    isDead: false,
    imgUrl: 'https://media.licdn.com/dms/image/C4D03AQGfyPuFsTIUGw/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=7OXzLY3ZYonsyvYiipm1xvpYsNCHX4p7-dkIz3_O1Qo',
  },
  {
    id: 'student12',
    firstName: 'Jamie',
    lastName: 'Phillips',
    isDead: false,
    imgUrl: 'https://media.licdn.com/dms/image/C4E03AQEYwGWdDcvxYg/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=IhVUgCTfcl2LplAToxS4jokS7we1AQPy-RuQzDVHcPg',
  },
  {
    id: 'student13',
    firstName: 'Jasmine',
    lastName: 'Williams',
    isDead: false,
    imgUrl: 'https://avatars1.githubusercontent.com/u/47404655?s=460&v=4',
  },
  {
    id: 'student14',
    firstName: 'John',
    lastName: 'Key',
    isDead: false,
    imgUrl: 'https://avatars3.githubusercontent.com/u/54037058?s=460&v=4',
  },
  {
    id: 'student15',
    firstName: 'John',
    lastName: 'Thielman',
    isDead: false,
    imgUrl: 'https://avatars3.githubusercontent.com/u/54124593?s=460&v=4',
  },
  {
    id: 'student16',
    firstName: 'John',
    lastName: 'Johnson',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/51214463?s=460&v=4',
  },
  {
    id: 'student17',
    firstName: 'Kelsey',
    lastName: 'Creel',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/54123694?s=460&v=4',
  },
  {
    id: 'student18',
    firstName: 'Laura',
    lastName: 'Collins',
    isDead: false,
    imgUrl: 'https://avatars1.githubusercontent.com/u/51382883?s=460&v=4',
  },
  {
    id: 'student19',
    firstName: 'Maggie',
    lastName: 'Greene',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/54197223?s=460&v=4',
  },
  {
    id: 'student20',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/54127296?s=460&v=4',
  },
  {
    id: 'student21',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    isDead: false,
    imgUrl: 'https://avatars0.githubusercontent.com/u/53092019?s=460&v=4',
  },
  {
    id: 'student22',
    firstName: 'Randy',
    lastName: 'Tate',
    isDead: false,
    imgUrl: 'https://avatars2.githubusercontent.com/u/54008854?s=460&v=4',
  },
  {
    id: 'student23',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    isDead: false,
    imgUrl: 'https://avatars3.githubusercontent.com/u/40898992?s=460&v=4',
  },
];


const livingStudents = () => {
  const liveStudents = students.filter((response) => response.isDead === false);
  return liveStudents;
};

const dearlyBeloved = () => {
  const deadStudents = students.filter((response) => response.isDead === true);
  return deadStudents;
};

const followTheLight = (studentId) => {
  const studentIndex = students.findIndex((student) => student.id === studentId);
  students[studentIndex].isDead = true;
};

export default { livingStudents, dearlyBeloved, followTheLight };
