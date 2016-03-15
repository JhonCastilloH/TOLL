if (Meteor.isServer) {
  app = Express();
  app.get('/:envo/:ligh/:mois/:temp', function(req, res) {
    var value1 = req.params.envo;
    var value2 = req.params.ligh;
    var value3 = req.params.mois;
    var value4 = req.params.temp;
    Enviroment.insert({
        value: +value1
      });

    Light.insert({
        value: +value2
      });

    Moisture.insert({
        value: +value3
      });

    Temperature.insert({
        value: +value4
      });

    res.json({
    'tollGetThis':  {
      'Enviroment':value1,
      'Light':value2,
      'Moisture':value3,
      'Temperature':value4
    }
  });

         });
  
}