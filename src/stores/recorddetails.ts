import { defineStore } from 'pinia'
import type { RecordDetail } from './types'
import apiClient from '@/api/axios'

// 创建 Pinia 仓库
export const useRecordDetailsStore = defineStore('recordDetails', {
  state: () => ({
    recordDetail: null as RecordDetail | null, // 当前选中的旅行记录
  }),
  actions: {
    // 获取详细信息
    getRecordDetail(id: number) {
      apiClient
        .get(`/records/${id}`)
        .then((res) => {
          this.recordDetail = res.data.recordDetail
        })
        .catch((err) => {
          console.error(err, '获取详细信息失败')
          // this.recordDetail = {
          //   id: 1,
          //   userId: 0,
          //   location: 'Paris, France',
          //   description: 'Visited the Eiffel Tower',
          //   date: '2023-07-01',
          //   imagesUrl: [],
          //   content:
          //     'I had a great time visiting the Eiffel Tower in Paris. The view from the top was amazing!',
          //   tags: ['travel', 'paris'],
          //   isPublic: false,
          //   createdAt: '2023-07-01T12:00:00Z',
          //   updatedAt: '2023-07-01T12:00:00Z',
          // }
        })
    },
  },
})
