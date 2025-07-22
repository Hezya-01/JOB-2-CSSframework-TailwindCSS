// Simulasi Data Sensor
function updateSensorData() {
  document.getElementById('kecepatan angin').textContent =
    (Math.random() * 9).toFixed(2) + " m/s";

  document.getElementById('arah angin').textContent =
    Math.floor(Math.random() * 360) + " °";

  document.getElementById('kecepatan rotor').textContent =
    Math.floor(Math.random() * 900 + 500) + " RPM";

  setTimeout(updateSensorData, 3000);
}

// Kontrol Perangkat
function toggleLED(ledNum) {
  const btn = document.getElementById(`led${ledNum}`);
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = `LED ${ledNum} OFF`;
    btn.classList.remove('on');
    addLog(`LED ${ledNum} dimatikan`);
  } else {
    btn.textContent = `LED ${ledNum} ON`;
    btn.classList.add('on');
    addLog(`LED ${ledNum} dinyalakan`);
  }
}

function toggleBrake() {
  const btn = document.getElementById('brake');
  const isOn = btn.textContent.includes('ON');

  if (isOn) {
    btn.textContent = 'REM OFF';
    btn.classList.remove('on');
    addLog('Rem dinonaktifkan');
  } else {
    btn.textContent = 'REM ON';
    btn.classList.add('on');
    addLog('Rem diaktifkan (EMERGENCY)');
  }
}

// Log Aktivitas
function addLog(message) {
  const logElement = document.getElementById('activity-log');
  const timestamp = new Date().toLocaleTimeString();
  logElement.innerHTML = `<p>[${timestamp}] ${message}</p>` + logElement.innerHTML;
}

// Inisialisasi saat halaman dimuat
window.onload = function () {
  updateSensorData();
  addLog('Sistem monitoring turbin berjalan!');
};
