<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <div class="common-layout">
    <el-container class="page">
      <!-- 页头导航栏 -->
      <el-header class="head">
        <Travel-header />
      </el-header>

      <el-container class="main">
        <el-aside class="main-aside">
          <!-- 左侧时间戳列表 -->
          <Time-line />
        </el-aside>

        <!-- 主体区域：详细旅行记录 -->
        <el-main class="main-content">
          <Travel-details />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup></script>

<style scoped>
.common-layout {
  height: 100vh;
  overflow: hidden;
}
.page {
  height: 100vh;
  .head {
    padding: 0 0px;
  }
  .main {
    width: 100%;
    padding: 0 30vh;
    height: 100%;
    background-image: url('@/assets/img/bg.png');
    background-size: cover;
    background-position: center;
    .main-aside {
      width: 20%;
      min-width: 15vh;
      max-height: 90vh;
    }

    .main-content {
      min-width: 30vh;
      width: 80%;
    }
  }
}
</style>
