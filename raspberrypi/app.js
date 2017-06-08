var cmd = require('node-cmd');
var directory = '/home/pi/Documents/Github_Projects/intelligentNerfTurret/raspberrypi/Pictures/'; //directory where test pictures will be held -- not sure if there is a simpler way other than full folder address. Tried different methods this was the only one that worked.
var pic_Name = 'temp'; // this picture name is just for testing; We can use this variable for when we have to take pics of different objects for example

// command to run camera !
//what kind of file does CVS take?
cmd.run('raspistill -o ' + directory + pic_Name + '.jpg');