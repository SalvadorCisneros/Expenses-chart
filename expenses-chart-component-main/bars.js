function bars() {
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
      let total = 0;
      for (let i = 0; i < data.length; i++) {
          total += data[i].amount;
      }
      console.log(total); 

      for (let i = 0; i < data.length; i++) {
          let bar = document.getElementById(data[i].day);
          let barHeight = ((data[i].amount / total) * 100);
          console.log(data[i].id);
          bar.style.height = barHeight * 5 + 'px';

          let spent = document.getElementById('ms-' + data[i].day);
          spent.innerText = '$' + data[i].amount;
      }
  });
}

bars();
