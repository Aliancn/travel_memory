<template>
  <div class="header">
    <div class="logo">Travel Diary</div>
    <el-menu mode="horizontal" default-active="home">
      <el-menu-item index="1" @click="goToHome"> Home </el-menu-item>
      <el-menu-item index="2" @click="goToMyTravels"> My Travels </el-menu-item>
      <el-menu-item index="3" @click="goToSettings"> Settings </el-menu-item>
    </el-menu>
    <el-button class="logout-btn" @click="logout">Logout</el-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const goToHome = () => router.push({ name: 'Home' })
const goToMyTravels = () => router.push({ name: 'MyTravels' })
const goToSettings = () => router.push({ name: 'Settings' })

const logout = () => {
  userStore.logout()
  router.push({ name: 'Login' })
}
</script>

<style lang="less" scoped>
// 也可以在组件中直接编写 less 样式
@primary-color: #e1f5f4;
@background-color: #d6cccc;
@hover-color: #66b1ff;
@text-color: #333;
@header-height: 60px;
@logo-font-size: 24px;
@menu-item-font-size: 16px;
@menu-item-padding: 15px;
@button-color: #ff4d4f;

.header {
  background-color: @primary-color;
  color: @background-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: @header-height;

  .logo {
    font-size: @logo-font-size;
    width: 200px;
    //font-family: '华文彩云'; /*设置字体*/
    font-weight: bolder; /*设置字体粗细*/
    -webkit-text-stroke: 1px #eb946e; /*文字描边*/
    -webkit-text-fill-color: transparent; /*设置文字的填充颜色*/
    &:hover {
      cursor: pointer;
    }
  }

  .el-menu {
    background-color: transparent;
    color: @background-color;
    width: 100%;
    border: 0;
    justify-content: center;

    .el-menu-item {
      font-size: @menu-item-font-size;
      padding: @menu-item-padding;
      color: @background-color;

      &:hover {
        background-color: transparent;
        color: @hover-color;
      }

      &.is-active {
        color: @hover-color;
        border-bottom: 2px solid @hover-color;
      }
    }
  }

  .logout-btn {
    background-color: @button-color;
    color: @background-color;
    padding: 5px 20px;
    border-radius: 4px;

    &:hover {
      background-color: lighten(@button-color, 10%);
    }
  }
}
</style>
