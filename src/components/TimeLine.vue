<template>
  <div class="timestamp-aside">
    <el-scrollbar>
      <el-timeline class="timeline">
        <el-timeline-item
          v-for="record in travelRecords"
          :key="record.id"
          :timestamp="record.date"
          :color="isSelected(record) ? 'lightgreen' : 'gray'"
          class="timeline-item"
          placement="top"
          @click="selectTravelRecord(record)"
        >
          <el-card class="timeline-content">
            <div class="location">{{ record.location }}</div>
            <div class="description">{{ record.shortDescription }}</div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TravelRecord } from '@/stores/types'
import { useTravelRecordStore } from '@/stores/travelrecord'
const travelRecords = ref<TravelRecord[]>([
  {
    id: 1,
    location: 'Paris, France',
    date: '2023-07-01',
    shortDescription: 'Visited the Eiffel Tower',
  },
  {
    id: 2,
    location: 'Tokyo, Japan',
    date: '2023-08-15',
    shortDescription: 'Explored Shibuya Crossing',
  },
  {
    id: 3,
    location: 'New York, USA',
    date: '2023-09-30',
    shortDescription: 'Saw the Statue of Liberty',
  },
  {
    id: 4,
    location: 'Sydney, Australia',
    date: '2023-11-11',
    shortDescription: 'Visited the Sydney Opera House',
  },
  {
    id: 5,
    location: 'London, UK',
    date: '2023-12-25',
    shortDescription: 'Spent Christmas in London',
  },
  {
    id: 6,
    location: 'Beijing, China',
    date: '2024-01-01',
    shortDescription: 'Visited the Great Wall of China',
  },
])

const travelRecordStore = useTravelRecordStore()

const selectTravelRecord = (record: TravelRecord) => {
  travelRecordStore.setSelectedRecord(record)
  // console.log('Selected record:', record)
}

// 判断某个记录是否是当前选中的
const isSelected = (record: TravelRecord) => {
  return (
    travelRecordStore.selectedRecord &&
    travelRecordStore.selectedRecord.id === record.id
  )
}
</script>

<style scoped lang="less">
/* 左侧时间戳列表样式 */
.timestamp-aside {
  padding: 10px;
  margin-top: 20px;
  height: 90%;
  background: rgba(207, 244, 246, 0.749); /* 半透明白色背景 */
  backdrop-filter: blur(10px); /* 玻璃效果 */
  border-radius: 15px; /* 圆弧效果 */
  padding: 10px; /* 内边距 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}
.el-scrollbar {
}

.timeline {
  margin-top: 20px;
  padding-left: 5px;
  padding-right: 10px;
}

.date {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.location {
  font-size: 12px;
  color: #666;
}
</style>
