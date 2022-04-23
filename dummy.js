let data = {
    "script" : value,
    "language":lang,
    "versionIndex": "1",
    "clientId": '5b848516c9c4c71c9498f1ec5d449588',
    "clientSecret":'2b7377e552356e2bfb8fd13e301371e101a1b87902a5baeda37dcaa0854530f1'
 }
  let config = {
    method: "post",
    url:
      "https://api.jdoodle.com/execute",
   
    data: data,
  };