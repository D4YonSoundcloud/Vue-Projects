new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    specialAttackCounter: 3,
    turns: [],
  },
  methods: {
    startGame() {
      this.gameIsRunning = !this.gameIsRunning;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      //substract health from player and monster using a random int between the max and min
      let damage = this.calculateDamage(0, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        isSpecialTurn: false,
        isHealing: false,
        text: "Player hits Monster for " + damage + "hp",
      });
      if (this.checkWin()) {
        return;
      }
      damage = this.calculateDamage(2, 11);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        isSpecialTurn: false,
        isHealing: false,
        text: "Monster hits player for " + damage + "hp",
      });
      this.checkWin();
    },
    specialAttack() {
      //if the special attack is above zero then use it
      //otherwise just take damage
      if (this.specialAttackCounter > 0) {
        let damage = this.calculateDamage(5, 20);
        this.monsterHealth -= damage;
        this.turns.unshift({
          isPlayer: true,
          isSpecialTurn: true,
          isHealing: false,
          text: "Player hits Monster with Special Attack for " + damage + "hp",
        });
        damage = this.calculateDamage(2, 11);
        this.turns.unshift({
          isPlayer: false,
          isSpecialTurn: false,
          isHealing: false,
          text: "Monster hits player for " + damage + "hp",
        });
        this.playerHealth -= damage;
        this.specialAttackCounter--;
      } else {
        this.playerHealth -= this.calculateDamage(2, 11);
      }
    },
    heal() {
      //heal player
      //player also gets hit by monster
      let damage = this.calculateDamage(4, 15);
      this.playerHealth += damage;
      this.turns.unshift({
        isSpecialTurn: false,
        isPlayer: true,
        isHealing: true,
        text: "Player heals themself for " + damage + "hp",
      });
      damage = this.calculateDamage(2, 8);
      this.playerHealth -= damage;
      this.turns.unshift({
        isSpecialTurn: false,
        isHealing: false,
        isPlayer: false,
        text: "Monster hits player for " + damage + "hp",
      });
    },
    giveUp() {
      //gives up and resets data
      this.gameIsRunning = !this.gameIsRunning;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.specialAttackCounter = 3;
      this.turns = [];
    },
    calculateDamage(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    //checks if the player has lost or won after each attack
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New Game?")) {
          this.giveUp();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost...Try again?")) {
          this.giveUp();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});
