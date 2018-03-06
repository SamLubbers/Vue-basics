<template lang="html">
  <div class="container">
  <div class="row">
    <div class="col-12">
      <template v-if="users.length > 0">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th v-for='(header, index) in schema' :key='index' scope="col">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hoverHighlightInvert"
            v-for='(user, index) in users'
            :key='index'
            @click='removeUser(user)'>
              <td v-for='(value, key, index) in user' :key='index'>{{ value }}</td>
            </tr>
            <tr style="background-color: white">
              <td v-for='(value, key, index) in newUser' :key='index'>
                <input type="text"
                :placeholder="key"
                v-model='newUser[key]'
                @keydown.enter='addUser'>
              </td>
            </tr>
          </tbody>
        </table>
        <p style="color:red" v-if='invalidInput'>
          Please fill in all input fields
        </p>
      </template>
      <template v-else>
        <p>Failed creating table</p>
        <p v-if='apiErrorMessage'> API Error: {{ apiErrorMessage }}</p>
      </template>
    </div>
  </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'DynamicTable',
  data () {
    return {
      users: [],
      newUser: {},
      apiErrorMessage: '',
      invalidInput: false
    }
  },
  computed: {
    schema: function () {
      if (this.users.length > 0) {
        return Object.keys(this.users[0])
      }
    }
  },
  watch: {
    schema: function (schema) {
      var newUser = {}
      schema.map((k, i) => { newUser[k] = '' })
      this.newUser = Object.assign({}, newUser)
    }
  },
  methods: {
    addUser: function () {
      if (objectHasEmptyValue(this.newUser)) {
        this.invalidInput = true
      } else {
        this.invalidInput = false
        this.users.push(this.newUser)
      }
    },
    removeUser: function (user) {
      this.users.splice(this.users.indexOf(user), 1)
    }
  },
  created () {
    fetch('https://randomuser.me/api/?results=15')
      .then(response => response.json())
      .then(json => {
        for (let jsonUser of json.results) {
          let user = {
            'firstName': jsonUser.name.first,
            'lastName': jsonUser.name.last,
            'email': jsonUser.email
          }
          this.users.push(user)
        };
      })
      .catch((err) => { this.apiErrorMessage = err.message })
  }
}

function objectHasEmptyValue (obj) {
  for (var k in obj) {
    if (!obj[k]) {
      return true
    }
  }
  return false
}
</script>
