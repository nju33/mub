(function () {
  const taba = new Taba({
    target: document.getElementById('root')
  });

  // https://www.mockaroo.com/
  const data = [{id: 1, first_name: 'Charles', last_name: 'Reed', email: 'creed0@bloglines.com', gender: 'Male', ip_address: '22.92.157.254'},
  {id: 2, first_name: 'Irene', last_name: 'Parker', email: 'iparker1@printfriendly.com', gender: 'Female', ip_address: '142.207.22.221'},
  {id: 3, first_name: 'Carolyn', last_name: 'Ross', email: 'cross2@amazon.com', gender: 'Female', ip_address: '162.90.40.185'},
  {id: 4, first_name: 'Louise', last_name: 'Black', email: 'lblack3@ucsd.edu', gender: 'Female', ip_address: '228.65.223.35'},
  {id: 5, first_name: 'Jack', last_name: 'White', email: 'jwhite4@skype.com', gender: 'Male', ip_address: '78.76.119.78'},
  {id: 6, first_name: 'Debra', last_name: 'Riley', email: 'driley5@boston.com', gender: 'Female', ip_address: '57.96.130.240'},
  {id: 7, first_name: 'Arthur', last_name: 'Hunter', email: 'ahunter6@sphinn.com', gender: 'Male', ip_address: '9.180.199.89'},
  {id: 8, first_name: 'Gerald', last_name: 'Oliver', email: 'goliver7@lulu.com', gender: 'Male', ip_address: '140.57.44.77'},
  {id: 9, first_name: 'Sandra', last_name: 'Ruiz', email: 'sruiz8@friendfeed.com', gender: 'Female', ip_address: '246.164.20.163'},
  {id: 10, first_name: 'Rebecca', last_name: 'Bell', email: 'rbell9@hibu.com', gender: 'Female', ip_address: '33.213.178.173'},
  {id: 11, first_name: 'Jesse', last_name: 'Jacobs', email: 'jjacobsa@fda.gov', gender: 'Male', ip_address: '121.99.125.115'},
  {id: 12, first_name: 'Lois', last_name: 'Hernandez', email: 'lhernandezb@usa.gov', gender: 'Female', ip_address: '26.189.188.206'},
  {id: 13, first_name: 'Eric', last_name: 'Harrison', email: 'eharrisonc@netvibes.com', gender: 'Male', ip_address: '215.192.145.185'},
  {id: 14, first_name: 'Brian', last_name: 'Lawson', email: 'blawsond@artisteer.com', gender: 'Male', ip_address: '240.163.80.248'},
  {id: 15, first_name: 'Nicholas', last_name: 'Dixon', email: 'ndixone@wordpress.com', gender: 'Male', ip_address: '22.93.60.112'},
  {id: 16, first_name: 'Diane', last_name: 'Stephens', email: 'dstephensf@upenn.edu', gender: 'Female', ip_address: '212.177.101.107'},
  {id: 17, first_name: 'Shawn', last_name: 'Gutierrez', email: 'sgutierrezg@nps.gov', gender: 'Male', ip_address: '29.194.26.63'},
  {id: 18, first_name: 'Phyllis', last_name: 'Moore', email: 'pmooreh@wordpress.org', gender: 'Female', ip_address: '57.118.192.165'},
  {id: 19, first_name: 'Walter', last_name: 'Lane', email: 'wlanei@arstechnica.com', gender: 'Male', ip_address: '246.2.245.233'},
  {id: 20, first_name: 'Howard', last_name: 'Parker', email: 'hparkerj@meetup.com', gender: 'Male', ip_address: '202.2.45.94'},
  {id: 21, first_name: 'Laura', last_name: 'Reed', email: 'lreedk@go.com', gender: 'Female', ip_address: '251.96.176.208'},
  {id: 22, first_name: 'Donald', last_name: 'Franklin', email: 'dfranklinl@si.edu', gender: 'Male', ip_address: '11.140.77.251'},
  {id: 23, first_name: 'Angela', last_name: 'Elliott', email: 'aelliottm@1688.com', gender: 'Female', ip_address: '215.53.88.14'},
  {id: 24, first_name: 'Diane', last_name: 'Nguyen', email: 'dnguyenn@wikipedia.org', gender: 'Female', ip_address: '221.203.107.74'},
  {id: 25, first_name: 'Chris', last_name: 'Nguyen', email: 'cnguyeno@people.com.cn', gender: 'Male', ip_address: '184.188.50.81'},
  {id: 26, first_name: 'Michelle', last_name: 'Henry', email: 'mhenryp@yale.edu', gender: 'Female', ip_address: '245.229.20.22'},
  {id: 27, first_name: 'Frances', last_name: 'Boyd', email: 'fboydq@businesswire.com', gender: 'Female', ip_address: '215.94.243.136'},
  {id: 28, first_name: 'Barbara', last_name: 'Brooks', email: 'bbrooksr@amazon.co.uk', gender: 'Female', ip_address: '76.63.76.142'},
  {id: 29, first_name: 'Stephen', last_name: 'Hill', email: 'shills@mlb.com', gender: 'Male', ip_address: '155.148.173.18'},
  {id: 30, first_name: 'Linda', last_name: 'Hansen', email: 'lhansent@oakley.com', gender: 'Female', ip_address: '201.176.150.206'},
  {id: 31, first_name: 'Theresa', last_name: 'Fields', email: 'tfieldsu@devhub.com', gender: 'Female', ip_address: '42.254.190.240'},
  {id: 32, first_name: 'Amanda', last_name: 'Phillips', email: 'aphillipsv@istockphoto.com', gender: 'Female', ip_address: '243.48.43.220'},
  {id: 33, first_name: 'Roger', last_name: 'Hall', email: 'rhallw@mediafire.com', gender: 'Male', ip_address: '191.37.152.45'},
  {id: 34, first_name: 'Keith', last_name: 'Gonzalez', email: 'kgonzalezx@alexa.com', gender: 'Male', ip_address: '198.11.167.34'},
  {id: 35, first_name: 'Phyllis', last_name: 'Montgomery', email: 'pmontgomeryy@ameblo.jp', gender: 'Female', ip_address: '96.21.101.22'},
  {id: 36, first_name: 'Mark', last_name: 'Thompson', email: 'mthompsonz@webnode.com', gender: 'Male', ip_address: '179.55.208.218'},
  {id: 37, first_name: 'Phillip', last_name: 'Medina', email: 'pmedina10@mapquest.com', gender: 'Male', ip_address: '57.54.158.185'},
  {id: 38, first_name: 'Dorothy', last_name: 'Andrews', email: 'dandrews11@va.gov', gender: 'Female', ip_address: '102.171.120.121'},
  {id: 39, first_name: 'Melissa', last_name: 'Bennett', email: 'mbennett12@wsj.com', gender: 'Female', ip_address: '58.182.246.203'},
  {id: 40, first_name: 'Frank', last_name: 'Taylor', email: 'ftaylor13@hhs.gov', gender: 'Male', ip_address: '63.74.211.50'},
  {id: 41, first_name: 'Scott', last_name: 'Perez', email: 'sperez14@twitpic.com', gender: 'Male', ip_address: '125.32.2.168'},
  {id: 42, first_name: 'Johnny', last_name: 'Cox', email: 'jcox15@hibu.com', gender: 'Male', ip_address: '221.32.93.11'},
  {id: 43, first_name: 'Kathleen', last_name: 'Morgan', email: 'kmorgan16@bizjournals.com', gender: 'Female', ip_address: '245.9.219.155'},
  {id: 44, first_name: 'Jeremy', last_name: 'Bishop', email: 'jbishop17@nifty.com', gender: 'Male', ip_address: '43.189.131.203'},
  {id: 45, first_name: 'George', last_name: 'Wood', email: 'gwood18@csmonitor.com', gender: 'Male', ip_address: '63.186.253.246'},
  {id: 46, first_name: 'Nicole', last_name: 'West', email: 'nwest19@bigcartel.com', gender: 'Female', ip_address: '250.227.0.102'},
  {id: 47, first_name: 'Pamela', last_name: 'Hughes', email: 'phughes1a@fastcompany.com', gender: 'Female', ip_address: '210.28.67.158'},
  {id: 48, first_name: 'Pamela', last_name: 'Webb', email: 'pwebb1b@ihg.com', gender: 'Female', ip_address: '2.45.221.17'},
  {id: 49, first_name: 'Ronald', last_name: 'Wallace', email: 'rwallace1c@youtube.com', gender: 'Male', ip_address: '51.5.247.74'},
  {id: 50, first_name: 'Benjamin', last_name: 'Greene', email: 'bgreene1d@is.gd', gender: 'Male', ip_address: '5.98.146.104'}];

  taba.set({
    style: {
      height: '76vh',
    },
    data: {
      header: {
        data: Object.keys(data[0]),
        fixed: true
      },
      body: {
        data: data.map(d => Object.keys(d).reduce((result, key) => (
          result.concat(d[key])
        ), [])),
        zip: true,
        fixed: 1
      },
      footer: {
        data: Object.keys(data[0]),
        fixed: true
      }
    }
  });
})();
