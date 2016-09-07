//sample data
var factory = { totalSize: 3,
  done: true,
  records:
   [ { attributes: [Object],
       Id: '001E000000Im0jSIAR',
       question : 'What is 5 + 5?',
       answers : [{'aid' : '001E000000Im0jSIAR_a1', 'answer' : '10'},
                  {'aid' : '001E000000Im0jSIAR_a2', 'answer' : '20'},
                  {'aid' : '001E000000Im0jSIAR_a3', 'answer' : '26'},
                  {'aid' : '001E000000Im0jSIAR_a4', 'answer' : '94'},
                                                ] },
     { attributes: [Object],
       Id: '001E000000Im0jUIAR',
       question : 'What is 10 / 5?',
       answers : [{'aid' : '001E000000Im0jUIAR_a1', 'answer' : '2'}] },
     { attributes: [Object],
       Id: '001E000000Im0jQIAR',
       question : 'What is 5 * 5?',
       answers : [{'aid' : '001E000000Im0jQIAR_a1', 'answer' : '25'}] }]
};

exports.factory = factory;
