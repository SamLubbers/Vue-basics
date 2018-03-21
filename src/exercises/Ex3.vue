<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Form input</h2>
        <form>
          <full-name-input v-model='fullName'></full-name-input>
          <label for="email">Email</label>
          <input class="form-control" type="text" id="email" v-model='email'>
          <label for="password">Password</label>
          <input class="form-control" type="password" id="password" v-model='password'>
          <label for='storeCheckboxes'>Store in database?</label>
          <div id='storeCheckboxes'>
            <input type="radio" v-model='storeInDB' id="yes" value="yes">
            <label for="yes">yes</label>
            <input type="radio" v-model='storeInDB' id="no" value="no">
            <label for="no">no</label>
          </div>
          <button type="button" class="btn btn-primary" @click.prevent='show = true'>Submit</button>
        </form>
      </div>
    </div>
    <div class="row" v-if='show'>
      <div class="col-12">
        <hr>
        <h2>Form output</h2>
        <p><b>Full name:</b> {{fullName}}</p>
        <p><b>Email:</b> {{email}}</p>
        <p><b>Password:</b> {{password}}</p>
        <p><b>Store in database:</b> {{storeInDB}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import FullNameInput from './Ex3-components/FullNameInput.vue'

export default {
  data () {
    return {
      'fullName': 'Mike Mikers',
      'email': '',
      'password': '',
      'storeInDB': 'yes',
      'show': false
    }
  },
  components: {
    'full-name-input': FullNameInput
  }
}
</script>
