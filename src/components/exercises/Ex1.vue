<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
              <server-status/>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-12 col-sm-6">
              <server-list/>
            </div>
            <div class="col-xs-12 col-sm-6">
              <server-details/>
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
import ServerStatus from './Ex1-Components/ServerStatus'
import ServerList from './Ex1-Components/ServerList'
import ServerDetails from './Ex1-Components/ServerDetails'
import ServerManage from './Ex1-Components/ServerManage'

export default {
  name: 'Ex1',
  components: {
    'server-status': ServerStatus,
    'server-list': ServerList,
    'server-details': ServerDetails,
    'server-manage': ServerManage
  }
}
</script>

<style>
body{
  padding: 20px 0;
}
</style>
