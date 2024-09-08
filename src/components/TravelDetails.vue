<template>
  <div v-if="selectedRecord" class="travel-details">
    <h2 class="title">{{ selectedRecord.location }}</h2>
    <p class="date">{{ selectedRecord.date }}</p>
    <el-carousel indicator-position="outside" height="300px">
      <el-carousel-item
        v-for="(image, index) in recordDetail.imagesUrl"
        :key="index"
      >
        <img :src="image" class="travel-image" />
      </el-carousel-item>
    </el-carousel>
    <div class="description">{{ recordDetail.content }}</div>
  </div>
  <div v-else class="no-selection">
    Please select a travel record to view the details.
  </div>
</template>

<script setup>
import { useTravelRecordStore } from '@/stores/travelrecord'
// import { useRecordDetailsStore } from '@/stores/recorddetails'
const travelRecordStore = useTravelRecordStore()

const selectedRecord = computed(() => {
  console.log('selectedRecord:', travelRecordStore.selectedRecord)
  return travelRecordStore.selectedRecord
})

// const recordDetailsStore = useRecordDetailsStore()

// const recordDetail = computed(() => recordDetailsStore.recordDetail)

const recordDetail = ref({
  imagesUrl: [
    'https://images.cnblogs.com/cnblogs_com/blogs/785056/galleries/2390770/o_240409145026_koudo.png',
    'https://images.cnblogs.com/cnblogs_com/blogs/785056/galleries/2390770/o_240409145026_koudo.png',
    'https://images.cnblogs.com/cnblogs_com/blogs/785056/galleries/2390770/o_240409145026_koudo.png',
  ],
  content: 'This is a travel record content.',
})
</script>

<style scoped lang="less">
.travel-details {
  text-align: center;
  // 使内部内容可以滚动，自己不动
  overflow: auto;
  margin-top: 0px;
  background: rgba(207, 244, 246, 0.749); /* 半透明白色背景 */
  backdrop-filter: blur(10px); /* 玻璃效果 */
  border-radius: 15px; /* 圆弧效果 */
  padding: 10px; /* 内边距 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  height: 100%; /* 撑满父容器 */
  width: 100%; /* 撑满父容器 */
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.date {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}

.travel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description {
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}

.no-selection {
  text-align: center;
  font-size: 18px;
  color: #999;
}
</style>
