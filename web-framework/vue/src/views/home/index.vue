<template>
  <div class="inspection-page">
    <header>
      <el-button @click="goBack" icon="el-icon-arrow-left">返回智查任务列表</el-button>
      <h1>{{ title }}</h1>
      <p class="subtitle">刘浩荣于2016-06-28 12:32创建 | 任务状态：进行中 | 隐患上报：已开启</p>
    </header>

    <!-- Filters -->
    <div class="filters">
      <el-select v-model="filters.city" placeholder="全部城市" @change="filterResults">
        <el-option label="百色" value="百色" />
        <!-- Add other cities here -->
      </el-select>
      <el-select v-model="filters.type" placeholder="全部类型" @change="filterResults">
        <!-- Add type options here -->
      </el-select>
      <el-select v-model="filters.date" placeholder="全部日期" @change="filterResults">
        <!-- Add date options here -->
      </el-select>
      <el-select v-model="filters.unit" placeholder="全部单位" @change="filterResults">
        <!-- Add unit options here -->
      </el-select>
      <el-button type="primary">操作</el-button>
    </div>

    <!-- Summary Section -->
    <section>
      <h2>一、总体情况</h2>
      <p>{{ summaryText }}</p>
      <el-table :data="inspectionData" stripe>
        <el-table-column prop="unitName" label="被检查单位名称" />
        <el-table-column prop="date" label="检查日期" />
        <el-table-column prop="group" label="检查小组" />
        <el-table-column prop="normalHidden" label="一般隐患数" />
        <el-table-column prop="majorHidden" label="重大隐患数" />
        <el-table-column prop="totalHidden" label="总隐患数" />
        <el-table-column prop="industry" label="所属行业" />
        <el-table-column prop="city" label="所在城市" />
        <el-table-column prop="status" label="状态" />
      </el-table>
      <el-pagination
        v-model:currentPage="currentPage"
        :page-size="10"
        :total="inspectionData.length"
        @current-change="handlePageChange"
      />
    </section>

    <!-- Industry Section -->
    <section>
      <h2>二、行业情况</h2>
      <el-table :data="industryData" stripe>
        <el-table-column prop="industryName" label="行业名称" />
        <el-table-column prop="checkedUnits" label="已检查单位数" />
        <el-table-column prop="normalHidden" label="一般隐患数" />
        <el-table-column prop="majorHidden" label="重大隐患数" />
        <el-table-column prop="totalHidden" label="总隐患数" />
      </el-table>
      <el-pagination
        v-model:currentPage="industryCurrentPage"
        :page-size="10"
        :total="industryData.length"
        @current-change="handleIndustryPageChange"
      />
    </section>

    <section>
      <h2>三、各小组检查情况</h2>
      <p>本次督查，划分了3个小组，各小组检查情况如下：</p>
      <el-table :data="inspectionGroupData" stripe>
        <el-table-column prop="groupName" label="小组名称" />
        <el-table-column prop="checkedUnits" label="已检查单位数" />
        <el-table-column prop="normalHidden" label="一般隐患数" />
        <el-table-column prop="majorHidden" label="重大隐患数" />
        <el-table-column prop="totalHidden" label="总隐患数" />
      </el-table>
      <el-pagination
        v-model:currentPage="inspectionGroupCurrentPage"
        :page-size="10"
        :total="inspectionGroupData.length"
        @current-change="handleGroupPageChange"
      />
    </section>

    <!-- Hazard Details Section -->
    <section>
      <h2>四、隐患清单</h2>
      <p>本次督查，发现重大事故隐患4项...</p>

      <!-- Major Hazard Incidents List -->
      <div v-for="(hazard, index) in majorHazards" :key="index" class="hazard-item">
        <h3>({{ index + 1 }}) {{ hazard.companyName }}</h3>
        <el-card shadow="never" class="hazard-card">
          <div class="hazard-content">
            <p><strong>隐患描述:</strong> {{ hazard.description }}</p>
            <div class="hazard-images">
              <el-image v-for="(image, i) in hazard.images" :key="i" :src="image" fit="contain" class="hazard-image" />
            </div>
          </div>
        </el-card>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

interface InspectionData {
  unitName: string
  date: string
  group: string
  normalHidden: number
  majorHidden: number
  totalHidden: number
  industry: string
  city: string
  status: string
}

interface IndustryData {
  industryName: string
  checkedUnits: number
  normalHidden: number
  majorHidden: number
  totalHidden: number
}

const title = ref('2024年第三季度国务院安委会广西安全生产明察暗访')
const summaryText = ref(
  `2024年6月20日至2024年6月25日，国务院安委会对广西壮族自治区的南宁市、梧州市、玉林市进行安全生产监督检查，共检查了127家单位，其中政府部门10个，生产经营单位112家，共发现了309个事故隐患，其中一般事故隐患300个，重大事故隐患9个，详细情况如下：`
)

const filters = ref({
  city: '',
  type: '',
  date: '',
  unit: '',
})

const inspectionData = ref<InspectionData[]>([
  {
    unitName: '梧州市广西佛子矿业有限公司',
    date: '2024年6月20日',
    group: '第一检查小组',
    normalHidden: 2,
    majorHidden: 0,
    totalHidden: 2,
    industry: '工贸行业',
    city: '百色',
    status: '待检',
  },
  // Additional data here...
])

const industryData = ref<IndustryData[]>([
  {
    industryName: '工贸行业',
    checkedUnits: 51,
    normalHidden: 32,
    majorHidden: 2,
    totalHidden: 34,
  },
  // Additional data here...
])

const currentPage = ref(1)
const industryCurrentPage = ref(1)

function filterResults() {
  // Implement filter logic
}

function handlePageChange(page: number) {
  currentPage.value = page
}

function handleIndustryPageChange(page: number) {
  industryCurrentPage.value = page
}

function goBack() {
  ElMessageBox.alert('返回到智查任务列表', '提示')
}

const inspectionGroupData = ref([
  { groupName: '第一检查组', checkedUnits: 51, normalHidden: 32, majorHidden: 2, totalHidden: 34 },
  { groupName: '第二检查组', checkedUnits: 28, normalHidden: 21, majorHidden: 5, totalHidden: 26 },
  { groupName: '第三检查组', checkedUnits: 8, normalHidden: 27, majorHidden: 1, totalHidden: 28 },
])

const majorHazards = ref([
  {
    companyName: '梧州市广西佛子矿业有限公司',
    description: '企业未按规定对古矿区井下提升人员电缆进行使用6个月检测，不符合《金属非金属矿山安全规程》...',
    images: ['path/to/image1.jpg', 'path/to/image2.jpg'],
  },
  {
    companyName: '顾家县高朗加油站',
    description: '加油站使用塑料软管连接设备，不符合《城镇燃气设计规范》...',
    images: ['path/to/image3.jpg'],
  },
  {
    companyName: '广西某材料有限公司',
    description: '化学品储罐未按规定进行检查，存在泄漏风险...',
    images: ['path/to/image4.jpg'],
  },
  {
    companyName: '玉林市广西珠光矿业有限公司',
    description: '企业的防护措施不完善，存在安全隐患...',
    images: ['path/to/image5.jpg', 'path/to/image6.jpg'],
  },
])

const inspectionGroupCurrentPage = ref(1)

function handleGroupPageChange(page: number) {
  inspectionGroupCurrentPage.value = page
}
</script>

<style lang="scss" scoped>
.inspection-page {
  header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    .subtitle {
      font-size: 14px;
      color: #888;
    }
  }

  .filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  section {
    margin-top: 20px;

    h2 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  .hazard-item {
    margin-top: 20px;

    h3 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .hazard-card {
      margin-bottom: 20px;
    }

    .hazard-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .hazard-images {
      display: flex;
      gap: 10px;
    }

    .hazard-image {
      width: 150px;
      height: 100px;
      object-fit: cover;
      border-radius: 4px;
    }
  }
}
</style>
