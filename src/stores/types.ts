export interface TravelRecord {
  id: number
  location: string
  date: string
  shortDescription: string
}

export interface RecordDetail {
  id: number
  userId: number // 用户ID
  location: string
  description: string
  date: string // 使用字符串表示日期
  imagesUrl: string[] // 图片URL数组
  content: string // 详细内容
  tags: string[] // 标签数组
  isPublic: boolean
  createdAt: string // 使用字符串表示时间戳
  updatedAt: string // 使用字符串表示时间戳
}
