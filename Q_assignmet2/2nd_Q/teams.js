let Teams=

{
    aiec:400,
    aawic:60,
    qai:200,
    poc:100,
    gtm:50,
    hr:10
};

let team=Object.keys(Teams).sort((x,y)=>Teams[y]-Teams[x]);
console.log(team);

