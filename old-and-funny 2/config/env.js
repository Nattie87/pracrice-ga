// We will now create a config file to store all of our global variables in config; this helps to organise our code more efficiently.
module.exports = {
  db: 'mongodb://localhost/old-and-funny',
  port: process.env.PORT || 4000
};
