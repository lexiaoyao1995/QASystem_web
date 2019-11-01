<!--<template>-->

<!--&lt;!&ndash;  <div>&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="HelloWorld">Hello</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="album">album</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->

<!--</template>-->


<template>
  <Menu mode="horizontal" theme="light" :active-name="this.currentPageName" @on-select="selectPage">
    <MenuItem name="1">
      <router-link to="/index">
        <Icon type="ios-paper"/>
        首页
      </router-link>
    </MenuItem>
    <MenuItem name="2">
      <router-link to="/Album">
        <Icon type="ios-paper"/>
        相册
      </router-link>
    </MenuItem>
    <MenuItem name="3">
      <router-link to="/articles">
        <Icon type="ios-paper"/>
        文章
      </router-link>
    </MenuItem>
    <MenuItem style="float: right" name="username" disabled>
      <Icon type="md-body"/>
      {{userName}}
    </MenuItem>
  </Menu>
</template>

<script>
    export default {
        name: 'Nav',
        data() {
            return {
                pageStorege: 'currentPage',
                currentPageName: '1',
                userName: 'unknown'
            }
        },
        mounted() {
            if (this.$tool.isNullOrUndefinedOrEmpty(window.localStorage.getItem(this.pageStorege))) {
                window.localStorage.setItem(this.pageStorege, '1');
            }
            this.currentPageName = window.localStorage.getItem(this.pageStorege);

            let name = localStorage.getItem("userName");
            if (!this.$tool.isNullOrUndefinedOrEmpty(name)) {
                this.userName = name;
            }

        },
        methods: {
            selectPage(e) {
                window.localStorage.setItem(this.pageStorege, e);
            }
        }
    }

</script>

<style></style>
