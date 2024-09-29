<template>
  <div class="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md sm:max-w-lg lg:max-w-xl">
    <h1 class="text-xl font-bold mb-4 text-center">Chọn Địa Chỉ</h1>

    <div class="mb-4">
      <label for="province" class="block text-sm font-medium text-gray-700">Tỉnh Thành:</label>
      <select 
        v-model="selectedProvince" 
        @change="fetchDistricts"
        class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      >
        <option value="" disabled>-- Chọn Tỉnh Thành --</option>
        <option v-for="province in provinces" :key="province.id" :value="province.id">
          {{ province.name }}
        </option>
      </select>
    </div>

    <div v-if="districts.length > 0" class="mb-4">
      <label for="district" class="block text-sm font-medium text-gray-700">Quận Huyện:</label>
      <select 
        v-model="selectedDistrict" 
        @change="fetchWards"
        class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      >
        <option value="" disabled>-- Chọn Quận Huyện --</option>
        <option v-for="district in districts" :key="district.id" :value="district.id">
          {{ district.name }}
        </option>
      </select>
    </div>

    <div v-if="wards.length > 0" class="mb-4">
      <label for="ward" class="block text-sm font-medium text-gray-700">Phường Xã:</label>
      <select 
        v-model="selectedWard"
        class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      >
        <option value="" disabled>-- Chọn Phường Xã --</option>
        <option v-for="ward in wards" :key="ward.id" :value="ward.id">
          {{ ward.name }}
        </option>
      </select>
    </div>

    <div class="text-right">
      <button @click="submitAddress" class="border bg-red-500 text-white px-5 py-1 rounded">Gửi</button>
      <button @click="getCurrentLocation" class="border bg-blue-500 text-white px-5 py-1 rounded ml-2">Lấy Địa Chỉ Hiện Tại</button>
    </div>

    <div id="map" class="mt-4" style="height: 400px;"></div>

    <div v-if="coordinates" class="mt-4">
      <h2 class="text-lg font-semibold">Tọa độ:</h2>
      <p>Kinh độ: {{ coordinates.lng }}</p>
      <p>Vĩ độ: {{ coordinates.lat }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default {
  data() {
    return {
      provinces: [],
      districts: [],
      wards: [],
      selectedProvince: null,
      selectedDistrict: null,
      selectedWard: null,
      submittedData: null,
      coordinates: null,
      map: null,
    };
  },
  mounted() {
    this.fetchProvinces();
    this.initMap();
  },
  methods: {
    async fetchProvinces() {
      try {
        const response = await axios.get('https://esgoo.net/api-tinhthanh/1/0.htm');
        this.provinces = response.data.data;
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    },
    async fetchDistricts() {
      if (this.selectedProvince) {
        try {
          const response = await axios.get(`https://esgoo.net/api-tinhthanh/2/${this.selectedProvince}.htm`);
          this.districts = response.data.data;
          this.wards = [];
          this.selectedDistrict = null;
        } catch (error) {
          console.error('Error fetching districts:', error);
        }
      }
    },
    async fetchWards() {
      if (this.selectedDistrict) {
        try {
          const response = await axios.get(`https://esgoo.net/api-tinhthanh/3/${this.selectedDistrict}.htm`);
          this.wards = response.data.data;
        } catch (error) {
          console.error('Error fetching wards:', error);
        }
      }
    },
    submitAddress() {
  const province = this.selectedProvince ? this.provinces.find(p => p.id === this.selectedProvince)?.name : null;
  const district = this.selectedDistrict ? this.districts.find(d => d.id === this.selectedDistrict)?.name : null;
  const ward = this.selectedWard ? this.wards.find(w => w.id === this.selectedWard)?.name : null;

  this.submittedData = {
    province,
    district,
    ward,
  };
  console.log(this.submittedData);

  // Gọi hàm geocodeAddress chỉ khi có ít nhất một địa chỉ được chọn
  if (province || district || ward) {
    this.geocodeAddress(`${ward ? ward : ''}, ${district ? district : ''}, ${province ? province : ''}`.trim());
  } else {
    alert('Vui lòng chọn ít nhất một thông tin địa chỉ.');
  }
},

    initMap() {
      this.map = L.map('map').setView([14.0583, 108.2772], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap',
      }).addTo(this.map);

      this.map.on('click', (e) => {
        this.coordinates = e.latlng;
        console.log('Tọa độ:', this.coordinates);
      });
    },
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          this.coordinates = { lat: latitude, lng: longitude };
          this.map.setView([latitude, longitude], 13);
          L.marker([latitude, longitude]).addTo(this.map)
            .bindPopup('Địa chỉ hiện tại')
            .openPopup();
        }, () => {
          alert('Không thể lấy vị trí hiện tại.');
        });
      } else {
        alert('Trình duyệt không hỗ trợ Geolocation.');
      }
    },
    async geocodeAddress(address) {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          this.coordinates = { lat, lng: lon };
          this.map.setView([lat, lon], 13);
          L.marker([lat, lon]).addTo(this.map)
            .bindPopup(`Địa chỉ: ${address}`)
            .openPopup();
        } else {
          alert('Không tìm thấy địa chỉ.');
        }
      } catch (error) {
        console.error('Error geocoding address:', error);
      }
    },
  },
};
</script>

<style scoped>
#map {
  height: 400px;
  z-index: 5;
}
</style>
