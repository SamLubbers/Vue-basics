<template lang="html">
  <div class="container caps">
  <div class="row" id="players">
    <div class="col-6 center">
  		<h2>You</h2>
  		<div class="rectangle">
  			<div class="healthbar" :style="{width: playerHealth + '%'}">
  				<p class="healthText">{{playerHealth}}</p>
  			</div>
  		</div>
    </div>
  	<div class="col-6 center">
  		<h2 class="caps">Bot</h2>
  		<div class="rectangle">
  			<div class="healthbar" :style="{width: botHealth + '%'}">
  				<p class="healthText">{{botHealth}}</p>
  			</div>
  		</div>
  	</div>
  </div>
  <div class="row shadowed spaced" id="controls">
      <div class="col-12 center justify">
          <template v-if='newGame || winner'>
            <h2 v-if='winner'>{{winner}} win<span v-if='winner != "you"'>s</span> </h2>
            <button class="btn btn-success" @click='newGame = !newGame'>
              New game
            </button>
          </template>
          <template v-else>
            <button class="btn btn-danger btn-margin" @click='playerAttack'>attack</button>
            <button class="btn btn-warning btn-margin" @click='playerSpecialAttack'>special attack</button>
            <button class="btn btn-success btn-margin" @click='playerHeal'>heal</button>
            <button class="btn btn-secondary btn-margin" @click='newGame = !newGame'>
              give up
            </button>
          </template>
      </div>

  </div>
  <template v-if='!newGame && record.length > 0'>
  	<div class="row shadowed spaced" id="record">
  	  <div class="col-12 center">
  			<template v-for='action in recordChronologicalOrder'>
  				<div class="alert" :class="action.attacker == 'player' ? 'alert-primary' : 'alert-danger'">
  					<template v-if="action.type == 'attack'">
  						{{action.attacker}} hits {{action.receiver}} with {{action.force}}
  					</template>
  					<template v-else>
  						{{action.attacker}} heals himself with {{action.force}}
  					</template>
  				</div>
  			</template>
      </div>
    </div>
  </template>
</div>
</template>

<style lang="sass">
$vue-green: #41B883
$vue-gray: #35495E

.rectangle
	position: relative
	width: 100%
	height: 30px
	background: #CCC

.healthbar
	position: absolute
	width: 100%
	height: 30px
	background: $vue-green
	color: white
	text-align: center
	transition: all 0.3s linear

.healthText
	margin: 0
	line-height: 2rem

#record
	max-height: 50vw
	overflow: scroll

.btn-margin
	margin: 5px
</style>

<script>
export default {
  name: 'Game',
  data () {
    return {
      newGame: true,
      minHealth: 0,
      maxHealth: 100,
      playerHealth: 100,
      botHealth: 100,
      attackMaxforce: 5,
      specialAttackMaxforce: 15,
      playerMaxHeal: 10,
      record: [],
      winner: ''
    }
  },
  computed: {
    recordChronologicalOrder: function() {
      return this.record.reverse();
    }
  },
  watch: {
    newGame: function(newGame) {
      if (newGame) {
        this.playerHealth = this.maxHealth;
        this.botHealth = this.maxHealth;
        this.record = [];
        this.winner = '';
      }
    },
    playerHealth: function(playerHealth) {
      if (playerHealth <= 0) {
        this.playerHealth = 0;
        this.winner = 'bot';
      } else if (playerHealth > 100) {
        this.playerHealth = 100;
      }
    },
    botHealth: function(botHealth) {
      if (botHealth <= 0) {
        this.botHealth = 0;
        this.winner = 'you';
      } else if (botHealth > 100) {
        this.botHealth = 100;
      }
    }
  },
  methods: {
    recordAction(type, attacker, receiver, force) {
      newrecord = {
        'type': type,
        'attacker': attacker,
        'receiver': receiver,
        'force': force
      };
      this.record.push(newrecord);
    },
    computeForce(maxforce) {
      return Math.round(Math.random() * maxforce);
    },
    botattack(maxForce) {
      force = this.computeForce(maxForce) + 1;
      this.playerHealth -= force;
      this.recordAction('attack', "bot", "player", force);
    },
    playerAttack() {
      force = this.computeForce(this.attackMaxforce);
      this.botHealth -= force;
      this.recordAction('attack', "player", "bot", force);
      this.botattack(this.attackMaxforce);
    },
    playerSpecialAttack() {
      force = this.computeForce(this.specialAttackMaxforce);
      this.botHealth -= force;
      this.recordAction('attack', "player", "bot", force);
      this.botattack(this.attackMaxforce);
    },
    playerHeal() {
      force = this.computeForce(this.playerMaxHeal);
      this.playerHealth += force;
      this.recordAction('heal', "player", null, force);
      this.botattack(Math.random() > 0.8 ? this.specialAttackMaxforce : this.attackMaxforce);
    }
  }
}
</script>
