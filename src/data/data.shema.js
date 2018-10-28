//https://next.json-generator.com/

var data =

[
  {
    'repeat(30, 100)': {
      id: '{{objectId()}}',
      sortIndex: '{{index()}}',
      dahsboardId: '{{random("d1", "d2", "d3", "d4", "d5")}}',
      groupId: '{{random("g1", "g2", "g3", "g4")}}',
      name: '{{company()}}',
      url: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
      description: '{{lorem(5, "words")}}',
      icon: 'http://placehold.it/32x32',
      date: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}',
      tags: [
        {
          'repeat(3)': '{{random("blue", "brown", "green", "yellow", "green", "silver", "orange", "black", "white")}}'
        }
      ]
    }
  }
]