const mockData = {
  settings: {
    common: {
      theme: 'default'
    }
  },
  data: {
    dashboards: [
      {
        name: 'Dashboard 1',
        id: 'd1',
        sortIndex: 1
      },
      {
        name: 'Dashboard 2',
        id: 'd2',
        sortIndex: 2
      },
      {
        name: 'Dashboard 3',
        id: 'd3',
        sortIndex: 3
      },
      {
        name: 'Dashboard 4',
        id: 'd4',
        sortIndex: 4
      },
      {
        name: 'Dashboard 5',
        id: 'd5',
        sortIndex: 5
      }
    ],
    groups: [
      {
        name: 'Group1',
        id: 'g1',
        sortIndex: 1
      },
      {
        name: 'Group2',
        id: 'g2',
        sortIndex: 2
      },
      {
        name: 'Group3',
        id: 'g3',
        sortIndex: 3
      },
      {
        name: 'Group4',
        id: 'g4',
        sortIndex: 4
      }
    ],
    bookmarks: [
      [
        {
          id: '5bd5b1a957a16e7ca1dad660',
          sortIndex: 0,
          dahsboardId: 'd5',
          groupId: 'g4',
          name: 'Ginkle',
          url: '530 Gold Street, Brenton, Arkansas, 7676',
          description: 'est aute elit veniam cillum',
          icon: 'http://placehold.it/32x32',
          date: 'Wednesday, September 16, 2015 12:29 AM',
          tags: [
            'black',
            'green',
            'orange'
          ]
        },
        {
          id: '5bd5b1a9a4019bbaf96f3789',
          sortIndex: 1,
          dahsboardId: 'd2',
          groupId: 'g3',
          name: 'Earbang',
          url: '199 Greene Avenue, Somerset, New Mexico, 7708',
          description: 'ullamco officia id irure exercitation',
          icon: 'http://placehold.it/32x32',
          date: 'Sunday, December 10, 2017 9:39 PM',
          tags: [
            'silver',
            'green',
            'green'
          ]
        },
        {
          id: '5bd5b1a9a77c6c6bdc4e6ff8',
          sortIndex: 2,
          dahsboardId: 'd3',
          groupId: 'g2',
          name: 'Fishland',
          url: '411 Prospect Avenue, Ironton, Massachusetts, 8909',
          description: 'minim adipisicing fugiat incididunt amet',
          icon: 'http://placehold.it/32x32',
          date: 'Sunday, April 29, 2018 9:15 PM',
          tags: [
            'black',
            'green',
            'black'
          ]
        },
        {
          id: '5bd5b1a9f29581c6bc009686',
          sortIndex: 3,
          dahsboardId: 'd3',
          groupId: 'g1',
          name: 'Utara',
          url: '128 Kansas Place, Topanga, Marshall Islands, 2954',
          description: 'est commodo culpa eiusmod id',
          icon: 'http://placehold.it/32x32',
          date: 'Friday, May 27, 2016 5:54 PM',
          tags: [
            'silver',
            'blue',
            'orange'
          ]
        },
        {
          id: '5bd5b1a99b74a87e6997a83c',
          sortIndex: 4,
          dahsboardId: 'd4',
          groupId: 'g4',
          name: 'Decratex',
          url: '705 Alice Court, Moraida, Pennsylvania, 2396',
          description: 'sint ipsum veniam laboris minim',
          icon: 'http://placehold.it/32x32',
          date: 'Saturday, March 8, 2014 9:00 PM',
          tags: [
            'brown',
            'white',
            'silver'
          ]
        },
        {
          id: '5bd5b1a98513d7c6ba35165a',
          sortIndex: 5,
          dahsboardId: 'd3',
          groupId: 'g4',
          name: 'Tropolis',
          url: '220 Hastings Street, Stagecoach, Colorado, 9734',
          description: 'reprehenderit adipisicing excepteur in enim',
          icon: 'http://placehold.it/32x32',
          date: 'Saturday, August 19, 2017 11:31 AM',
          tags: [
            'brown',
            'green',
            'green'
          ]
        },
        {
          id: '5bd5b1a9640dfb90648628e5',
          sortIndex: 6,
          dahsboardId: 'd1',
          groupId: 'g1',
          name: 'Applica',
          url: '210 Montague Terrace, Shelby, District Of Columbia, 3763',
          description: 'nisi elit nostrud excepteur anim',
          icon: 'http://placehold.it/32x32',
          date: 'Tuesday, May 15, 2018 4:03 PM',
          tags: [
            'black',
            'silver',
            'brown'
          ]
        },
        {
          id: '5bd5b1a9c0e27079d76f28be',
          sortIndex: 7,
          dahsboardId: 'd3',
          groupId: 'g2',
          name: 'Comtent',
          url: '349 Rose Street, Goochland, Louisiana, 6046',
          description: 'laboris consectetur fugiat voluptate proident',
          icon: 'http://placehold.it/32x32',
          date: 'Sunday, March 29, 2015 2:27 PM',
          tags: [
            'white',
            'silver',
            'green'
          ]
        },
        {
          id: '5bd5b1a9d4eb371be005fa77',
          sortIndex: 8,
          dahsboardId: 'd2',
          groupId: 'g4',
          name: 'Artiq',
          url: '200 Emerson Place, Emory, Palau, 7865',
          description: 'labore est ut officia minim',
          icon: 'http://placehold.it/32x32',
          date: 'Friday, June 19, 2015 5:27 PM',
          tags: [
            'blue',
            'orange',
            'brown'
          ]
        },
        {
          id: '5bd5b1a9888b72274f1d7785',
          sortIndex: 9,
          dahsboardId: 'd4',
          groupId: 'g3',
          name: 'Steeltab',
          url: '560 Madison Place, Coyote, Connecticut, 3687',
          description: 'dolore enim labore aliquip elit',
          icon: 'http://placehold.it/32x32',
          date: 'Saturday, May 12, 2018 6:12 PM',
          tags: [
            'silver',
            'blue',
            'blue'
          ]
        },
        {
          id: '5bd5b1a929ca2a4704f412fe',
          sortIndex: 10,
          dahsboardId: 'd2',
          groupId: 'g2',
          name: 'Lunchpod',
          url: '474 Ferry Place, Dennard, Puerto Rico, 5786',
          description: 'id eu consectetur enim nisi',
          icon: 'http://placehold.it/32x32',
          date: 'Sunday, September 2, 2018 1:13 AM',
          tags: [
            'blue',
            'green',
            'orange'
          ]
        },
        {
          id: '5bd5b1a9d21f204f2b1122c3',
          sortIndex: 11,
          dahsboardId: 'd4',
          groupId: 'g1',
          name: 'Corporana',
          url: '654 Furman Avenue, Snelling, Indiana, 6144',
          description: 'pariatur adipisicing sint esse quis',
          icon: 'http://placehold.it/32x32',
          date: 'Wednesday, December 21, 2016 2:37 AM',
          tags: [
            'blue',
            'brown',
            'orange'
          ]
        },
        {
          id: '5bd5b1a9954c25563df001bd',
          sortIndex: 12,
          dahsboardId: 'd1',
          groupId: 'g4',
          name: 'Conferia',
          url: '431 Calyer Street, Deercroft, South Dakota, 9071',
          description: 'deserunt anim nisi deserunt nulla',
          icon: 'http://placehold.it/32x32',
          date: 'Monday, February 2, 2015 8:19 AM',
          tags: [
            'blue',
            'green',
            'green'
          ]
        },
        {
          id: '5bd5b1a958342d01041ad24f',
          sortIndex: 13,
          dahsboardId: 'd1',
          groupId: 'g2',
          name: 'Lotron',
          url: '764 Gotham Avenue, Harviell, Ohio, 6062',
          description: 'sunt velit exercitation non aliquip',
          icon: 'http://placehold.it/32x32',
          date: 'Wednesday, March 9, 2016 2:54 PM',
          tags: [
            'brown',
            'green',
            'orange'
          ]
        },
        {
          id: '5bd5b1a90297e748ad5072d6',
          sortIndex: 14,
          dahsboardId: 'd3',
          groupId: 'g3',
          name: 'Voratak',
          url: '967 Ralph Avenue, Norwood, Virgin Islands, 552',
          description: 'aliquip officia est elit dolor',
          icon: 'http://placehold.it/32x32',
          date: 'Friday, July 6, 2018 12:43 PM',
          tags: [
            'green',
            'orange',
            'blue'
          ]
        },
        {
          id: '5bd5b1a94d70616ea469643b',
          sortIndex: 15,
          dahsboardId: 'd4',
          groupId: 'g4',
          name: 'Skybold',
          url: '770 Veronica Place, Utting, Illinois, 8815',
          description: 'voluptate dolore amet nostrud et',
          icon: 'http://placehold.it/32x32',
          date: 'Monday, December 4, 2017 4:12 AM',
          tags: [
            'orange',
            'white',
            'blue'
          ]
        },
        {
          id: '5bd5b1a92ef4ae09094af21c',
          sortIndex: 16,
          dahsboardId: 'd3',
          groupId: 'g3',
          name: 'Accidency',
          url: '952 Cumberland Walk, Felt, Northern Mariana Islands, 6926',
          description: 'pariatur adipisicing elit eu consectetur',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, December 17, 2015 11:46 PM',
          tags: [
            'green',
            'blue',
            'blue'
          ]
        },
        {
          id: '5bd5b1a916663e0f681da846',
          sortIndex: 17,
          dahsboardId: 'd3',
          groupId: 'g1',
          name: 'Quizka',
          url: '422 Bartlett Street, Gardners, Missouri, 510',
          description: 'est et cupidatat velit velit',
          icon: 'http://placehold.it/32x32',
          date: 'Tuesday, March 31, 2015 1:13 PM',
          tags: [
            'silver',
            'silver',
            'green'
          ]
        },
        {
          id: '5bd5b1a91482e1be6c145c6d',
          sortIndex: 18,
          dahsboardId: 'd2',
          groupId: 'g4',
          name: 'Flexigen',
          url: '381 Coffey Street, Hinsdale, New Hampshire, 7261',
          description: 'laborum culpa nisi duis proident',
          icon: 'http://placehold.it/32x32',
          date: 'Sunday, November 22, 2015 1:29 AM',
          tags: [
            'blue',
            'silver',
            'green'
          ]
        },
        {
          id: '5bd5b1a93945967978592d49',
          sortIndex: 19,
          dahsboardId: 'd3',
          groupId: 'g2',
          name: 'Magmina',
          url: '658 Highlawn Avenue, Noxen, Iowa, 4171',
          description: 'anim elit laboris eiusmod eiusmod',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, September 18, 2014 8:18 PM',
          tags: [
            'orange',
            'white',
            'black'
          ]
        },
        {
          id: '5bd5b1a90b33923d3c47467a',
          sortIndex: 20,
          dahsboardId: 'd4',
          groupId: 'g3',
          name: 'Menbrain',
          url: '226 Beayer Place, Goldfield, Virginia, 5844',
          description: 'aliquip et velit adipisicing in',
          icon: 'http://placehold.it/32x32',
          date: 'Sunday, August 21, 2016 11:11 PM',
          tags: [
            'green',
            'green',
            'green'
          ]
        },
        {
          id: '5bd5b1a918b6c6b71e74f251',
          sortIndex: 21,
          dahsboardId: 'd2',
          groupId: 'g2',
          name: 'Vantage',
          url: '769 Hamilton Walk, Chilton, Montana, 2799',
          description: 'velit ipsum eiusmod anim veniam',
          icon: 'http://placehold.it/32x32',
          date: 'Saturday, August 4, 2018 4:07 PM',
          tags: [
            'brown',
            'orange',
            'orange'
          ]
        },
        {
          id: '5bd5b1a96cd48ff882698c56',
          sortIndex: 22,
          dahsboardId: 'd5',
          groupId: 'g3',
          name: 'Ontagene',
          url: '790 Nixon Court, Tuskahoma, Maryland, 7250',
          description: 'tempor qui do quis Lorem',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, September 18, 2014 5:10 AM',
          tags: [
            'white',
            'silver',
            'white'
          ]
        },
        {
          id: '5bd5b1a918ebe0b25589f0a8',
          sortIndex: 23,
          dahsboardId: 'd3',
          groupId: 'g3',
          name: 'Quilk',
          url: '322 Duffield Street, Churchill, Idaho, 4387',
          description: 'reprehenderit incididunt magna esse proident',
          icon: 'http://placehold.it/32x32',
          date: 'Friday, June 2, 2017 12:01 PM',
          tags: [
            'orange',
            'yellow',
            'yellow'
          ]
        },
        {
          id: '5bd5b1a95b2ec8113dc368c6',
          sortIndex: 24,
          dahsboardId: 'd3',
          groupId: 'g1',
          name: 'Comvey',
          url: '925 Kensington Walk, Cliff, Nebraska, 6126',
          description: 'culpa Lorem aute dolore in',
          icon: 'http://placehold.it/32x32',
          date: 'Monday, February 19, 2018 12:30 AM',
          tags: [
            'silver',
            'yellow',
            'green'
          ]
        },
        {
          id: '5bd5b1a9c74bc4ba2508d3b9',
          sortIndex: 25,
          dahsboardId: 'd1',
          groupId: 'g1',
          name: 'Assistia',
          url: '945 Anna Court, Spelter, Georgia, 4664',
          description: 'minim minim nostrud dolor pariatur',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, August 16, 2018 5:58 AM',
          tags: [
            'silver',
            'green',
            'yellow'
          ]
        },
        {
          id: '5bd5b1a901465a6dc52968ef',
          sortIndex: 26,
          dahsboardId: 'd2',
          groupId: 'g2',
          name: 'Circum',
          url: '156 Benson Avenue, Clarksburg, New Jersey, 5112',
          description: 'quis enim eiusmod cillum velit',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, January 16, 2014 6:14 AM',
          tags: [
            'green',
            'brown',
            'yellow'
          ]
        },
        {
          id: '5bd5b1a9c34a031ae5b577bc',
          sortIndex: 27,
          dahsboardId: 'd3',
          groupId: 'g3',
          name: 'Medesign',
          url: '159 Bergen Street, Smock, Tennessee, 2123',
          description: 'cillum reprehenderit et non qui',
          icon: 'http://placehold.it/32x32',
          date: 'Wednesday, October 4, 2017 1:13 PM',
          tags: [
            'orange',
            'silver',
            'orange'
          ]
        },
        {
          id: '5bd5b1a9852f8344c4a3afd5',
          sortIndex: 28,
          dahsboardId: 'd3',
          groupId: 'g3',
          name: 'Chorizon',
          url: '225 Mill Avenue, Evergreen, North Dakota, 9001',
          description: 'reprehenderit dolor in minim quis',
          icon: 'http://placehold.it/32x32',
          date: 'Wednesday, September 14, 2016 7:36 PM',
          tags: [
            'orange',
            'silver',
            'green'
          ]
        },
        {
          id: '5bd5b1a939493c4d0536b7f4',
          sortIndex: 29,
          dahsboardId: 'd4',
          groupId: 'g1',
          name: 'Digifad',
          url: '875 Erskine Loop, Esmont, Alaska, 1766',
          description: 'proident nostrud nulla ipsum labore',
          icon: 'http://placehold.it/32x32',
          date: 'Tuesday, June 24, 2014 6:34 AM',
          tags: [
            'white',
            'green',
            'white'
          ]
        },
        {
          id: '5bd5b1a9f892b910eb8a4d51',
          sortIndex: 30,
          dahsboardId: 'd4',
          groupId: 'g1',
          name: 'Techtrix',
          url: '178 Nevins Street, Canby, North Carolina, 7476',
          description: 'officia eu ipsum voluptate do',
          icon: 'http://placehold.it/32x32',
          date: 'Monday, August 22, 2016 9:46 PM',
          tags: [
            'yellow',
            'green',
            'green'
          ]
        },
        {
          id: '5bd5b1a9ee382a95e2055033',
          sortIndex: 31,
          dahsboardId: 'd3',
          groupId: 'g3',
          name: 'Enormo',
          url: '528 Sharon Street, Frystown, Michigan, 6709',
          description: 'sit officia laboris ex incididunt',
          icon: 'http://placehold.it/32x32',
          date: 'Friday, August 24, 2018 7:11 AM',
          tags: [
            'yellow',
            'green',
            'brown'
          ]
        },
        {
          id: '5bd5b1a95b2a501ae1da3e07',
          sortIndex: 32,
          dahsboardId: 'd1',
          groupId: 'g1',
          name: 'Fossiel',
          url: '448 Gelston Avenue, Makena, Arizona, 7835',
          description: 'duis amet est nostrud excepteur',
          icon: 'http://placehold.it/32x32',
          date: 'Sunday, May 7, 2017 4:59 PM',
          tags: [
            'yellow',
            'green',
            'green'
          ]
        },
        {
          id: '5bd5b1a98fdf72c9999316b7',
          sortIndex: 33,
          dahsboardId: 'd4',
          groupId: 'g3',
          name: 'Fitcore',
          url: '793 Ditmars Street, Chestnut, Guam, 2671',
          description: 'dolore sit nisi ipsum do',
          icon: 'http://placehold.it/32x32',
          date: 'Tuesday, December 22, 2015 3:08 PM',
          tags: [
            'blue',
            'green',
            'green'
          ]
        },
        {
          id: '5bd5b1a96d8fac316b83dd3c',
          sortIndex: 34,
          dahsboardId: 'd1',
          groupId: 'g4',
          name: 'Enersave',
          url: '762 Dodworth Street, Waiohinu, Kentucky, 6335',
          description: 'proident quis esse mollit eu',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, May 26, 2016 12:54 AM',
          tags: [
            'green',
            'green',
            'yellow'
          ]
        },
        {
          id: '5bd5b1a9bcd3ca90f1b82e88',
          sortIndex: 35,
          dahsboardId: 'd5',
          groupId: 'g4',
          name: 'Equicom',
          url: '960 Fairview Place, Cloverdale, American Samoa, 2469',
          description: 'irure sit non eiusmod ea',
          icon: 'http://placehold.it/32x32',
          date: 'Sunday, April 23, 2017 4:21 PM',
          tags: [
            'yellow',
            'green',
            'black'
          ]
        },
        {
          id: '5bd5b1a926dcc435877f62ac',
          sortIndex: 36,
          dahsboardId: 'd2',
          groupId: 'g3',
          name: 'Capscreen',
          url: '264 Russell Street, Vaughn, South Carolina, 5437',
          description: 'in aute eiusmod proident elit',
          icon: 'http://placehold.it/32x32',
          date: 'Monday, February 12, 2018 10:15 PM',
          tags: [
            'blue',
            'white',
            'brown'
          ]
        },
        {
          id: '5bd5b1a9c368462bbd1e187d',
          sortIndex: 37,
          dahsboardId: 'd2',
          groupId: 'g1',
          name: 'Elemantra',
          url: '209 Eagle Street, Avalon, Delaware, 6187',
          description: 'nisi culpa labore aliqua non',
          icon: 'http://placehold.it/32x32',
          date: 'Tuesday, April 15, 2014 12:28 AM',
          tags: [
            'white',
            'black',
            'silver'
          ]
        },
        {
          id: '5bd5b1a95ba9878c287080b1',
          sortIndex: 38,
          dahsboardId: 'd2',
          groupId: 'g3',
          name: 'Comcur',
          url: '882 Middagh Street, Breinigsville, Alabama, 9713',
          description: 'laboris qui amet ex non',
          icon: 'http://placehold.it/32x32',
          date: 'Wednesday, July 8, 2015 8:14 PM',
          tags: [
            'black',
            'green',
            'blue'
          ]
        },
        {
          id: '5bd5b1a9084120d09a827f4a',
          sortIndex: 39,
          dahsboardId: 'd1',
          groupId: 'g2',
          name: 'Quility',
          url: '601 Shale Street, Haring, Rhode Island, 5593',
          description: 'pariatur ad commodo magna occaecat',
          icon: 'http://placehold.it/32x32',
          date: 'Tuesday, July 19, 2016 2:25 AM',
          tags: [
            'orange',
            'white',
            'white'
          ]
        },
        {
          id: '5bd5b1a96079aaaa19c0c510',
          sortIndex: 40,
          dahsboardId: 'd3',
          groupId: 'g1',
          name: 'Zillidium',
          url: '683 Falmouth Street, Idledale, Wyoming, 4657',
          description: 'eiusmod cupidatat irure nulla ipsum',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, March 3, 2016 11:19 PM',
          tags: [
            'brown',
            'yellow',
            'silver'
          ]
        },
        {
          id: '5bd5b1a9f0ec12c15ad24d2e',
          sortIndex: 41,
          dahsboardId: 'd4',
          groupId: 'g4',
          name: 'Quadeebo',
          url: '222 Fenimore Street, Lydia, Oklahoma, 3670',
          description: 'est laboris quis eu fugiat',
          icon: 'http://placehold.it/32x32',
          date: 'Wednesday, April 8, 2015 8:44 PM',
          tags: [
            'brown',
            'brown',
            'brown'
          ]
        },
        {
          id: '5bd5b1a927b8a21a10487356',
          sortIndex: 42,
          dahsboardId: 'd5',
          groupId: 'g2',
          name: 'Krog',
          url: '769 Wilson Avenue, Stewart, Florida, 6919',
          description: 'consequat aute esse magna sunt',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, June 26, 2014 5:32 PM',
          tags: [
            'orange',
            'blue',
            'yellow'
          ]
        },
        {
          id: '5bd5b1a9aac74ea153f89756',
          sortIndex: 43,
          dahsboardId: 'd4',
          groupId: 'g4',
          name: 'Lexicondo',
          url: '612 Lincoln Road, Kersey, New York, 9857',
          description: 'commodo Lorem deserunt consequat commodo',
          icon: 'http://placehold.it/32x32',
          date: 'Monday, July 10, 2017 10:12 PM',
          tags: [
            'blue',
            'silver',
            'black'
          ]
        },
        {
          id: '5bd5b1a946bd865cd820e887',
          sortIndex: 44,
          dahsboardId: 'd2',
          groupId: 'g4',
          name: 'Elita',
          url: '631 Bijou Avenue, Wiscon, Washington, 4073',
          description: 'ex ipsum aliqua nostrud do',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, November 2, 2017 12:45 PM',
          tags: [
            'white',
            'green',
            'orange'
          ]
        },
        {
          id: '5bd5b1a93f5ca51cf57fbe6a',
          sortIndex: 45,
          dahsboardId: 'd3',
          groupId: 'g1',
          name: 'Koffee',
          url: '253 Putnam Avenue, Tioga, Federated States Of Micronesia, 8646',
          description: 'consequat commodo eu magna consectetur',
          icon: 'http://placehold.it/32x32',
          date: 'Tuesday, November 14, 2017 10:52 AM',
          tags: [
            'silver',
            'brown',
            'blue'
          ]
        },
        {
          id: '5bd5b1a93302d6f77c2d1b1b',
          sortIndex: 46,
          dahsboardId: 'd1',
          groupId: 'g2',
          name: 'Extragene',
          url: '381 Court Square, Dodge, West Virginia, 7484',
          description: 'voluptate incididunt ex in cillum',
          icon: 'http://placehold.it/32x32',
          date: 'Friday, May 22, 2015 7:21 AM',
          tags: [
            'black',
            'blue',
            'silver'
          ]
        },
        {
          id: '5bd5b1a9e0849ee887e67cd8',
          sortIndex: 47,
          dahsboardId: 'd4',
          groupId: 'g1',
          name: 'Minga',
          url: '123 Broadway , Odessa, Minnesota, 7012',
          description: 'adipisicing ex amet consectetur eiusmod',
          icon: 'http://placehold.it/32x32',
          date: 'Friday, October 20, 2017 1:24 AM',
          tags: [
            'green',
            'orange',
            'silver'
          ]
        },
        {
          id: '5bd5b1a9d63c4fbaba1a14b4',
          sortIndex: 48,
          dahsboardId: 'd5',
          groupId: 'g1',
          name: 'Acium',
          url: '275 Beaver Street, Canterwood, Kansas, 7009',
          description: 'minim mollit adipisicing esse aliqua',
          icon: 'http://placehold.it/32x32',
          date: 'Wednesday, September 26, 2018 7:58 AM',
          tags: [
            'silver',
            'orange',
            'green'
          ]
        },
        {
          id: '5bd5b1a9e09f8d1aae7e86c3',
          sortIndex: 49,
          dahsboardId: 'd2',
          groupId: 'g2',
          name: 'Securia',
          url: '299 Nassau Avenue, Blairstown, Nevada, 7323',
          description: 'ea elit cillum sit et',
          icon: 'http://placehold.it/32x32',
          date: 'Wednesday, July 18, 2018 7:08 AM',
          tags: [
            'yellow',
            'blue',
            'green'
          ]
        },
        {
          id: '5bd5b1a9d459662fb9165ff0',
          sortIndex: 50,
          dahsboardId: 'd4',
          groupId: 'g2',
          name: 'Nebulean',
          url: '773 Knickerbocker Avenue, Hampstead, Vermont, 6126',
          description: 'aute veniam ad fugiat elit',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, December 11, 2014 5:21 AM',
          tags: [
            'black',
            'green',
            'silver'
          ]
        },
        {
          id: '5bd5b1a9995667bb57056e0e',
          sortIndex: 51,
          dahsboardId: 'd1',
          groupId: 'g3',
          name: 'Rocklogic',
          url: '784 Branton Street, Westerville, Oregon, 6839',
          description: 'cillum sunt Lorem cillum id',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, May 12, 2016 3:25 PM',
          tags: [
            'brown',
            'blue',
            'orange'
          ]
        },
        {
          id: '5bd5b1a9eb2106d04d9a837e',
          sortIndex: 52,
          dahsboardId: 'd1',
          groupId: 'g4',
          name: 'Pheast',
          url: '469 Broome Street, Elfrida, Texas, 5764',
          description: 'magna eu esse nisi dolore',
          icon: 'http://placehold.it/32x32',
          date: 'Monday, November 28, 2016 7:37 AM',
          tags: [
            'blue',
            'green',
            'black'
          ]
        },
        {
          id: '5bd5b1a9d451dd4da7a73da7',
          sortIndex: 53,
          dahsboardId: 'd1',
          groupId: 'g3',
          name: 'Exposa',
          url: '996 Wyona Street, Berwind, Wisconsin, 848',
          description: 'cupidatat in cupidatat ex voluptate',
          icon: 'http://placehold.it/32x32',
          date: 'Friday, June 12, 2015 5:24 PM',
          tags: [
            'brown',
            'silver',
            'silver'
          ]
        },
        {
          id: '5bd5b1a94a295ac6f7da6805',
          sortIndex: 54,
          dahsboardId: 'd1',
          groupId: 'g2',
          name: 'Panzent',
          url: '790 Village Court, Brecon, California, 723',
          description: 'reprehenderit dolore dolore reprehenderit ullamco',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, January 11, 2018 7:31 AM',
          tags: [
            'black',
            'blue',
            'orange'
          ]
        },
        {
          id: '5bd5b1a99fda8347575d2dad',
          sortIndex: 55,
          dahsboardId: 'd1',
          groupId: 'g4',
          name: 'Isologia',
          url: '634 Linwood Street, Veyo, Utah, 6424',
          description: 'anim consectetur non laboris sunt',
          icon: 'http://placehold.it/32x32',
          date: 'Thursday, October 11, 2018 9:31 AM',
          tags: [
            'green',
            'orange',
            'yellow'
          ]
        },
        {
          id: '5bd5b1a9dbd95c994ee4ac62',
          sortIndex: 56,
          dahsboardId: 'd4',
          groupId: 'g2',
          name: 'Remotion',
          url: '608 Oxford Walk, Morningside, Maine, 5922',
          description: 'occaecat duis anim id aute',
          icon: 'http://placehold.it/32x32',
          date: 'Sunday, February 7, 2016 8:49 PM',
          tags: [
            'black',
            'yellow',
            'blue'
          ]
        }
      ]
    ],
    tags: [
      'blue',
      'brown',
      'green',
      'yellow',
      'green',
      'silver',
      'orange',
      'black',
      'white'
    ]
  }
};

export default mockData;