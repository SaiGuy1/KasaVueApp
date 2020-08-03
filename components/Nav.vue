<template>
  <div>
  <b-navbar type="light" variant="white">
    <b-navbar-nav>
      <b-nav-brand href="/"><img src="https://i.ibb.co/wBDSwkm/kasa-logo.jpg" alt="kasa-logo" border="0"></b-nav-brand>

      <b-navbar-nav class="right">
        <b-nav-item href="/confirmationCode">Your Reservations</b-nav-item>
        <b-nav-item href="/confirmationCode">FAQ</b-nav-item>
        <b-nav-item href="/confirmationCode">Contact</b-nav-item>
        <b-nav-item href="/confirmationCode">Guest Portal</b-nav-item>
      </b-navbar-nav>
    </b-navbar-nav>
  </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style>
.right{
    float: right;
}
</style>