const SerialPort = require('serialport')

$(() => {
  // const SerialPort = require('serialport')
  var select = document.getElementById('portSelect1')
  SerialPort.list().then(
    ports => ports.forEach(function(port) {
      var option = document.createElement('option')
      option.text = port.path + ' (' + port.manufacturer + ')'
      option.value = port.path
      select.appendChild(option)
    })
  )
})

function connectToPort() {
  var selectPort = document.getElementById('portSelect1');
  var portName = selectPort.options[selectPort.selectedIndex].value;
  console.log(portName)
  // const SerialPort = require('serialport')
  const port = new SerialPort(portName, {baudRate: 115200}, function (err) {
    if (err) {
      return console.log('Error: ', err.message)
    } else {
      console.log('Connection successful...')
      console.log('Baud Rate: ' + port.baudRate)
    }
  })
}

function toggleSideBar() {
  $('#sidebar, #content').toggleClass('active');
  $('#sidebar button i').toggleClass('fa-arrow-right fa-arrow-left');
}