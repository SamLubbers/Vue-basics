<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
              <server-status/>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-12 col-sm-8">
              <server-list :showServerDetails='showServerDetails'/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <server-details :selectedServer='selectedServer' :changeServerStatus='changeServerStatus'/>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-12">
              <server-manage/>
            </div>
        </div>
    </div>
</template>

<script>
import ServerStatus from './Ex1-Components/ServerHeader'
import ServerList from './Ex1-Components/ServerList'
import ServerDetails from './Ex1-Components/ServerDetails'
import ServerManage from './Ex1-Components/ServerFooter'

export default {
  name: 'Ex1',
  components: {
    'server-status': ServerStatus,
    'server-list': ServerList,
    'server-details': ServerDetails,
    'server-manage': ServerManage
  },
  data: function () {
    return {
      selectedServer: {}
    }
  },
  methods: {
    showServerDetails (server) {
      this.selectedServer = server
    },
    changeServerStatus () {
      this.selectedServer.status = this.selectedServer.status === 'active' ? 'disconnected' : 'active'
    }
  }
}
</script>

<style>
body{
  padding: 20px 0;
}
</style>
