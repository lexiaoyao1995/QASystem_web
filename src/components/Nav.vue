<!--<template>-->

<!--&lt;!&ndash;  <div>&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="HelloWorld">Hello</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="album">album</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->

<!--</template>-->


<template>
  <Menu mode="horizontal" theme="light" active-name="1">
    <MenuItem name="1">
      <Icon type="ios-paper"/>
      <router-link to="index">首页</router-link>
    </MenuItem>
    <MenuItem name="2">
      <Icon type="ios-paper"/>
      <router-link to="Album">相册</router-link>
    </MenuItem>
    <MenuItem name="3">
      <Icon type="ios-paper"/>
      <router-link to="articles">文章</router-link>
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
