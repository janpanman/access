<template>
<b-jumbotron>
  <template slot="header">
    Access management portal
  </template>
  <template slot="lead">
    This portal is intended to map users/groups defined in a registry (like Active Directory) to a certain set of systems using scope tags and
    to associate sudo entitlements if needed. Current capabilities apply OS level access (SSH/RDP) to salt managed VM's.
  </template>
  <hr class="my-4">
     On this portal you can:
  <ul>
      <li>Update owner (reassign/assume) [by owner only]</li>
      <li>Add/remove delegates [by owner or delegates]</li>
      <li>Add/remove SME's [by owner or delegates]</li>
      <li>Define scope, where this group or user should be made available [by owner, delegates or SME's]</li>
      <li>Define entitlements like sudo [by owner, delegates or SME's]</li>
  </ul>
<hr class="my-4">
  <p>
    The SME's assigned could help with the technical definitions on scope and entitlements. 
  </p>
  <p>
    All updates require an approval workflow. Some go through Access Management for authorization.
  </p>
  <p>
    All transactions including approvals/declines/attestations are logged and available in the History section. It provides an audit trail.
  </p>
  <br><br>
</b-jumbotron>
</template>

<script>

</script>

<style>

</style>
