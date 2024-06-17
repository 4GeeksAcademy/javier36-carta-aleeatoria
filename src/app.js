/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pintas = ["♦", "♥", "♠", "♣"];
  const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
  const pintasRandom = Math.floor(Math.random() * pintas.length);
  const valoresRandom = Math.floor(Math.random() * valores.length);
  let elementoHeader = document.getElementsByClassName("headerPinta");
  let elementoFooter = document.getElementsByClassName("footerPinta");
  for (let i = 0; i < elementoHeader.length; i++) {
    if (pintasRandom === 0 || pintasRandom === 1) {
      elementoHeader[i].className += " text-danger";
    }
  }
  for (let i = 0; i < elementoFooter.length; i++) {
    if (pintasRandom === 0 || pintasRandom === 1) {
      elementoFooter[i].className += " text-danger";
    }
  }
  let header = document.getElementById("headerCard");
  let center = document.getElementById("centerCard");
  let footer = document.getElementById("footerCard");
  header.textContent = pintas[pintasRandom];
  center.textContent = valores[valoresRandom];
  footer.textContent = pintas[pintasRandom];
};

console.log("Hello Rigo from the console!");
