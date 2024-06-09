const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

function deployHelmChart() {
  exec('kubectl apply -f helm-chart/node-app', (error, stdout, stderr) => {
    if (error) {
      console.error(`Fout bij het implementeren van de Helm-chart: ${error}`);
      return;
    }
    console.log(`Helm-chart succesvol geïmplementeerd: ${stdout}`);
  });
}

const randomMessages = [
  'Mooi, je call is netjes binnen gekomen!',
  'Geweldig, je call is ontvangen en verwerkt!',
  'Prima, de call is succesvol ontvangen!',
  'Fantastisch, we hebben je call ontvangen!',
  'Uitstekend, je call is verwerkt en klaar voor gebruik!',
  'Top! Je call is veilig aangekomen.',
  'Gefeliciteerd, je call is correct ontvangen en verwerkt!',
  'Je call is veilig en wel aangekomen, bedankt!',
  'Je call is met succes verwerkt, een mooie dag toegewenst!',
  'Je aanvraag is correct ontvangen, we werken eraan!',
  'Je aanvraag is in goede orde ontvangen, we zullen het behandelen!',
  'Je call is ontvangen en wordt verwerkt, bedankt voor je geduld!'
];

app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * randomMessages.length);
  const randomMessage = randomMessages[randomIndex];
  res.send(randomMessage);
});

deployHelmChart();

app.listen(port, () => {
  console.log(`App luistert op http://localhost:${port}`);
});