<!--<template>-->

<!--&lt;!&ndash;  <div>&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="HelloWorld">Hello</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="album">album</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->

<!--</template>-->


<template>
  <Menu mode="horizontal" theme="light" active-name="1">
    <MenuItem name="1">
      <router-link to="index">

        <Icon type="ios-paper"/>
        首页
      </router-link>
    </MenuItem>
    <MenuItem name="2">
      <router-link to="Album">
        <Icon type="ios-paper"/>
        相册
      </router-link>
    </MenuItem>
    <MenuItem name="3">
      <router-link to="articles">
        <Icon type="ios-paper"/>
        文章
      </router-link>
    </MenuItem>
  </Menu>
</template>

<script>
    export default {
        name: 'Nav',
        data() {
            return {}
        }
    }

</script>

<style></style>
