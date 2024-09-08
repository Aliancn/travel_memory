import { defineStore } from 'pinia'
import type { TravelRecord } from './types'
import apiClient from '@/api/axios'

export const useTravelRecordStore = defineStore('travelrecord', {
  state: () => {
    return {
      selectedRecord: null as TravelRecord | null, // 当前选中的旅行记录
      records: [] as TravelRecord[], // 所有旅行记录
    }
  },
  actions: {
    setSelectedRecord(record: TravelRecord) {
      this.selectedRecord = record
    },
    getRecords() {
      apiClient
        .get('/api/record')
        .then((res) => {
          this.records = res.data.records
        })
        .catch((err) => {
          console.error(err, 'Failed to fetch records')
        })
    },
  },
})
