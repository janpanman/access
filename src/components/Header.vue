<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">{{ title }}</b-navbar-brand>
    <!-- <b-collapse is-nav id="nav_collapse"> -->
    <b-navbar-nav>

      <b-nav-item-dropdown text="Activities" right>
        <b-dropdown-item router-link to="/new">Create new Access request</b-dropdown-item>
        <b-dropdown-item router-link to="/current">Update current Access details</b-dropdown-item>
        <b-dropdown-item router-link to="/assume">Assume existing Access</b-dropdown-item>
        <b-dropdown-item router-link to="/history">History</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item href="help">Help</b-nav-item>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>{{ username}}</em>
        </template>
        <b-dropdown-item href="profile">Profile</b-dropdown-item>
        <b-dropdown-item href="signout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  <!-- </b-collapse> -->
</b-navbar>
  </header>
</template>

<script>

export default {
  data() {
    return {
        title: 'Access management',
        username: 'Jan Panman'
      
    }
  }
}
</script>

<style scoped>

</style>
