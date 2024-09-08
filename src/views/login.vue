<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h2>Welcome</h2>
      </div>
      <div class="formdata">
        <el-form ref="formRef" :model="form" :rules="rules">
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              clearable
              placeholder="请输入账号"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              clearable
              placeholder="请输入密码"
              show-password
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="tool">
        <div>
          <el-checkbox v-model="checked" @change="remenber">
            记住密码
          </el-checkbox>
        </div>
        <div>
          <el-button style="background-color: transparent; border: 0">
            <span class="shou" @click="forgetpas">忘记密码? </span>
          </el-button>
        </div>
      </div>
      <div class="butt">
        <el-button type="primary" @click="login"> 登录 </el-button>
        <el-button class="shou" @click="register"> 注册 </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import type { CheckboxValueType, FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/index'

const userStore = useUserStore()
const router = useRouter()
const formRef = ref<FormInstance>()
const form = reactive({
  password: '',
  username: '',
})

const checked = ref(false)

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { max: 10, message: '不能大于10个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { max: 10, message: '不能大于10个字符', trigger: 'blur' },
  ],
})

const forgetpas = () => {
  ElMessage({
    message: '暂未开通服务',
    type: 'warning',
  })
}

const register = () => {}

const remenber = (data: CheckboxValueType) => {
  checked.value = data as boolean
  if (checked.value) {
    localStorage.setItem('loginInfo', JSON.stringify(form))
  } else {
    localStorage.removeItem('loginInfo')
  }
}

const login = () => {
  formRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      try {
        await userStore.login(form.username, form.password)
        ElMessage.success('Login successful')
        router.push({ name: 'home' }) // 假设有 Home 页面
      } catch (error: any) {
        ElMessage.error(error.message)
      }
    } else {
      ElMessage({
        message: '表单验证失败，请检查输入。',
        type: 'warning',
      })
    }
  })
}
</script>

<style scoped>
.loginbody {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background-image: url('@/assets/img/login2.png');
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  background-repeat: no-repeat;
  position: fixed;
  line-height: 100%;
  padding-top: 150px;
}

.logintext {
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

.logindata {
  width: 400px;
  height: 300px;
  transform: translate(-50%);
  margin-left: 50%;
}

.tool {
  display: flex;
  justify-content: space-between;
  color: #606266;
}

.butt {
  margin-top: 10px;
  text-align: center;
}

.shou {
  cursor: pointer;
  color: #606266;
}
</style>
